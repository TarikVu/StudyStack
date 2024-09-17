| **Request Type**    | **Route Parameter**   | **Query Parameter**                  | **Request Body**                                  |
|---------------------|------------------------|-------------------------------------|---------------------------------------------------|
| **CRUD Type**       | GET, DELETE            | GET                                 | POST, PUT, PATCH                                 |

### Examples:
**Route Parameter**:
```js
// Client-side
const boardResponse = await fetch(`http://localhost:5000/boards/${boardId}/${userId}`);
const board = await boardResponse.json();

// Server Side
app.get('/boards/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const boards = await Board.find({ userId });
        res.status(200).json(boards);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```
  
**Query Parameter**: 
```js
// Client-side
const productsResponse = await fetch('http://localhost:5000/products?category=electronics');
const products = await productsResponse.json();

// Server Side
app.get('/products', async (req, res) => {
    try {
        const category = req.query.category;
        const products = await Product.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```
**Body Parameter**: 
```js
// Client-side
const createUserResponse = await fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "John Doe", email: "john@example.com" })
});
const newUser = await createUserResponse.json();

// Server Side
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```

**Route & Body (PATCH)**:
```js
// Client side
const userId = '123'; // Example user ID
const updateUserResponse = await fetch(`http://localhost:5000/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Jane Doe", email: "jane@example.com" })
});
const updatedUser = await updateUserResponse.json();

// Server side
app.patch('/users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, email } = req.body;

        // Assuming you have a User model with a findByIdAndUpdate method
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email }, // Update fields
            { new: true }    // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

```

### **1. Route (Path) Parameters**
**When to Use:**
- **Resource Identification**: When you need to identify a specific resource or entity.
- **Example**: Fetching details of a specific user or board by its unique ID.

**Use Case:**
- `GET /users/:userId` to get user details.
- `DELETE /posts/:postId` to delete a specific post.
- Access in Express: `req.params`
- Example: `/users/:userId`

**Typical Usage:**
- Used in RESTful APIs to define resource paths.

---

### **2. Query Parameters**
**When to Use:**
- **Filtering and Searching**: When you need to filter or sort data, or pass optional parameters.
- **Example**: Searching for users based on criteria or paginating results.

**Use Case:**
- `GET /products?category=electronics&sort=price` to filter and sort products.
- `GET /orders?status=shipped&page=2` to get a specific page of orders with a given status.
- Access in Express: `req.query`
- Example: `/users?userId=123`

**Typical Usage:**
- Used for queries that don't directly identify a resource but modify how data is retrieved.

---

### **3. Request Body**
**When to Use:**
- **Data Submission**: When you need to send a large amount of data or create/update a resource.
- **Example**: Submitting a form, creating a new user, or updating an existing record.

**Use Case:**
- `POST /users` with body `{ "name": "John Doe", "email": "john@example.com" }` to create a new user.
- `PUT /products/123` with body `{ "price": 19.99 }` to update the price of a specific product.
- Access in Express: `req.body`
- Example: `{ userId: 123, boardName: 'New Board' }` in a `POST` request.

**Typical Usage:**
- Used in `POST`, `PUT`, or `PATCH` requests to send data to the server.

---

### Summary:
- **Route Parameters**: Identify specific resources (e.g., `/users/123`).
- **Query Parameters**: Filter or modify data (e.g., `/products?category=electronics`).
- **Request Body**: Submit or update data (e.g., `{ "name": "John Doe" }` in a `POST` request).

