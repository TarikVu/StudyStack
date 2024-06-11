const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {

    // Query the "User" collection in MongoDb
    // - select('-password') excludes password data from the query (minus pass)
    // - lean() Converts the Mongoose documents to json.
    const users = await User.find().select('-password').lean();

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }

    // send the user json as a response 
    res.json(users);
})

// @desc Create a new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {

    // Decontruct req's body for new user data
    const { username, password, roles } = req.body;

    // Confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username upcon creation
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' });
    }

    // Hash the password w/ 10 hashrounds
    const hashedPwd = await bcrypt.hash(password, 10);


    // Create & store new user
    const userObject = { username, password: hashedPwd, roles };
    const user = await User.create(userObject);
    if (user) {
        res.status(201).json({ message: `new user ${username} created` })
    }
    else {
        res.status(400).json({ message: 'Invalid user data received' })
    }

})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { _id, username, roles, active, password } = req.body;

    // Confirm data 
    if (!_id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields except password are required' })
    }

    // Get the user as mongoose doc object 
    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Upon req username change, check db for existing duplicate
    const duplicate = await User.findOne({ username }).lean().exec();

    // If there is a duplicate, and that duplicate'd Id is not our user
    // then throw an error, else we can update.
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate username' });
    }

    // Update the user object 
    user.username = username;
    user.roles = roles;
    user.active = active;

    // Password change request,  Bcrypt salt it.
    if (password) {
        user.password = await bcrypt.hash(password, 10); // salt rounds
    }

    // we can call user.save() because we didnt use .lean when querying.
    // therefore we are using a mongoose doc object, and that object has 
    // the save method.
    const updatedUser = await user.save();

    res.json({ message: `${updatedUser.username} updated` });
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {

    const { _id } = req.body;

    if (!_id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    // Query the User, not as a json because we need to call .delete() later.
    const user = await User.findById(_id).exec();
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Dont delete the user if they have notes.
    const note = await Note.findOne({ user: _id }).lean().exec();
    if (note?.length) {
        return res.status(400).json({ message: 'User has assigned notes.' });
    }


    // Delete the user and send the reply via the response.
    const result = await user.deleteOne();
    console.log("Delete result:" + result);
    const reply = `Username ${user.username} with ID ${user.id} deleted`;
    res.json(reply);
})

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }