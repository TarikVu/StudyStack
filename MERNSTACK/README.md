# MERN Tutorial Log & Notes
Author: [Dave Gray](https://github.com/gitdagray)
### [Video Tutorial (Timestamp: 2:42:15)](https://www.youtube.com/watch?v=CvCiNeLnZ00)
#### - [Tutorial github repo 🔗 ](https://github.com/gitdagray/mern_stack_course)
> [!IMPORTANT]
> This tutorial has been put on hold in order to learn Redux. 
## Table of Contents
1. [Chapter 1: Setting Up](#ch1)

1. [Chapter 2: Middleware](#ch2)

1. [Chapter 3: <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB Logo" width="80" height="20">](#ch3)

1. [Chapter 4: Models & Controllers, Async & Bcrypt](#ch4)

1. [Chapter 4.5: <img src="https://assets.getpostman.com/common-share/postman-logo-horizontal-320x132.png" alt="Postman Logo" width="50" height="20">](#ch4.5)

1. [Chapter 5: REACT <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="12" height="12"> ](#ch5)

1. [Chapter 6: Redux & RTX Query](#ch6)

1. [Misc Notes](#misc-notes)

1. [Shortcuts & macros](#s&m)

1. [Appendix](#apdx)



## <a name="ch1"></a> **Chapter 1: Setting Up**

Create two folders _"backend"_ and _"frontend"_:
### **Inside of Backend (Express):**  
#### *1. Set up the project with*
```bash
npm init -y
npm i express
npm i nodemon -D
```

- Initializes a new Node.js project using npm (Node Package Manager) with default values for all prompts. This creates a `package.json` file.*
- Installs express.
- Installs nodemon as a dev tool (useful for hot reloading during dev). 

#### 1.1
- Rename index.js to server.js
- "main" should reference **server.js** if changed from **index.js**

#### *2. Changing Package.json*
- Add a description (optional)
- Add the scripts to package.json to run the command  **_npm start dev_**
```json
"scripts": {
    "start": "node server",
    "dev": "nodemon server"
  },
```
> [!NOTE]
> Whenever a new package is installed, `package.json` should update with the new dependences.
> This package is referenced whenever `npm i` is ran in the directory in order to download the node_modules file since that file is 
too large for remote repositories.

#### *3. Setup 404.html and index.html*
- Create 2 folders in backend _routes_ and _views_
- Add `404.html` & `index.html` in _views_
- Add `root.js` in _routes_

#### *4. Other Imports for Backend*
```bash
npm i cors
npm i cookie-parser
npm i dotenv
```
- Used to specify what origins access backend API
- see [cookie notes⬇](#cookies) below
- see [chaper 3⬇](#ch3) below

### **Inside of Frontend (React):**  
1. Set up the project with npx create-react-app **[frontend]** (dir loc)
1. Delete extra files created from REACT
    - public &rarr; logo images 
    - src &rarr; [App.cs, App.test.js, logo,svg, reportWebVitals.js, setupTests.js]
    - Remove reportwebvitals from index.js & logo import from App.js

#### *Starting React*
```bash
npm start
```
>[!NOTE]
> _After ensuring React has been setup, go back to developing the backend._


## <a name="ch2"></a> **Chapter 2: Middleware & Route Handling**  
### Summary
1. Added config & middleware folders
1. Under _middleware_ created `logger.js` and `errorLogger.js` 
1. Under _config_ `corsOptions.js` & `allowedOrigins.js`

#### Mounting in Express with  `app.use();`
This is an essential method for express. It is one of the core methods in express which lets us perform the following:
- Mount Middle Ware mounting (_included or 3rd party_)
- Perform Route Handling 
- Handle Errors  

>[!IMPORTANT]
> The order in which `app.use();` is called to mount is important. 
> Typically the order in which items are mounted for express are as follows:
> 1. Error Handling middleware
> 1. Middleware for parsing req bodies
> 1. Middleware for serving static files
> 1. Session middleware
> 1. Authentication middleware
> 1. Route Handlers
> 1. Route catch-all (_404 not found_)
> 1. Error handling middle ware 


#### *Example Code*
```javascript
const express = require('express');
const app = express();

// Error handling middleware
app.use(errorHandler);

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static('public'));

// Session middleware
app.use(sessionMiddleware);

// Authentication middleware
app.use(authMiddleware);

// Route handlers
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Mount other route handlers...
app.all('*', (req, res) => {
  // 404 Case
});

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}
```


## <a name="ch3"></a> **Chapter 3: <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB Logo" width="120" height="30">**

### Summary
1. Created a **_models_** folder for `Users.js` & `Notes.js`
1. Created `dbConn.js` in config folder to setup db connection
1. Installed mongoose & mongoose sequence
1. Added Database_URI to `.env`

### **MongoDB**
Follow chapter 3 of the tutorial to setup a database.
1. Creating a mongodb account (free)
1. Creating a DB cluster 
1. Under Security &rarr; Database Acess &rarr; create user w/ pass
1. Select "connect" on the database to get the URI
1. Place the URI in the .env file.k
1. Install mongoose & mongoose-sequence

#### *Installing Mongoose*
```bash
npm i mongoose 
npm i mongoose-sequence
```
_Install mongoose-sequence to handle auto incrementing see [Appendix⬇](#mongo-sequence)_



#### **dot env** 
dot env is a module that is used to load in enviroment variables from a *.env* file into the Node.JS runtime enviroment.  Often used to keep track of DB connection strings / credentials. dot env (.env) files can also be used to track API keys, port configs, email service creds and more. 

> [!NOTE]
> - The **.env** file needs to be at the same level as the backend server.js/index.js file.

> [!IMPORTANT]
> - Add the **.env** to exclude from github as it contains sensitive information.
> - Due to this, if an application is to be shared on git publicly for other users to run locally then it is important to leave documentation on how to run the app with a .env file.  IE provide an example .env that does not have sensitive information.


## <a name="ch4"></a> **Chapter 4: Models & Controllers, Async & Bcrypt**  
### Summary
1. Adding user & notes models and controllers
1. Adding CRUD methods 
1. Added bcrypt and async handler 

### Setting up Models & their controllers
Creating a Database "object" such as can be broken up into 3 steps.<br> Here we'll use the "User" object as and example:

1. _**The Model:**_<br>
The Model (Schema) is created usually under a "Models" directory. Setting up the schema is straightforward and requires **'mongoose'**.<br> 
From there, simply set up the schema w/ the desired parameters and export accordingly.<br>
[More documentation here 🔗](https://www.mongodb.com/docs/manual/applications/data-models/)

1. _**The Controller:**_<br>
The Controller is where we handle REST API calls for our CRUD methods (GET, POST, PUT, PATCH, DELETE).<br>
For cleaner async processes, and consistent error handling **express-async-handler** is utilized.<br>
Depending on what is needed for the model we may also utilize **bycrypt**.

1. _**Setup & Using the Route:**_<br>
- Under the Routes directory, set up a route the the user using **express.Router**.
- Lastly, Mount the route using **app.use('/users', require('./routes/userRoutes'))** in the server file.

### Async-Handler & Bcrypt for Password Security
```bash
npm i express-async-handler
npm i bcrypt
```
#### Aysnc-Handler
Handles Http requests asynchronously using 'async'/'await'.  Helps with readability & maintainability when doing async tasks such as DB operations, File i/o, or external API calls.
> [!IMPORTANT]
> - Async handler upon install caused warnings.  Some dependencies are no longer supported. Identify the packages with **npm ls inflight** then update by running **npm outdated** and **npm update**.

#### B-crypt
Used for hashing and securely storing passwords.<br>
Before storing user passwords in the db, bcrypt hashes them so they aren't stored as plain text.<br>
When a user attempts to login, we compare the hashed version of the pass w/ the stored hash for authentication.<br>
The password is **Salted** before hashing. Which means adding a random val to the password before the has so that if two users have the same password, the hash will be different. 



## <a name="ch4.5"></a> **Chapter 4.5: Postman**  <img src="https://assets.getpostman.com/common-share/postman-logo-horizontal-320x132.png" alt="Postman Logo" width="50" height="20">

Used for testing the API calls.<br>
Create a new tab and on the top left, we can designate the CRUD call we'll test.<br>
Under **Body** &rarr; **raw**  we can hardcode a JSON to send as a test.<br>
There are more functionalities that Postman offers where we can save presets for testing the backend. 



## <a name="ch5"></a> **Chapter 5: REACT** <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="16" height="16">

### Summary
1. Installed ES7 for enhanced React shortcuts
1. Installed React Router
1. Copied React templates from tutorial.
1. installed Fort Awesome font package.


```bash 
npm i @fortawesome/fontawesome-svg-core @fortawesomefree-solid-svg-icons @fortawesome/react-fontawesom
```
_Download @fortAwesome packages to use their font._ 


### React Router
```bash
npm i react-router-dom
```
_Used for routing pages client side in react_ 



## <a name="ch6"></a> **Chapter 6: Redux & RTK Query**
#### Summary
1. Installed Redux

```bash
npm i @reduxjs/toolkit react-redux
```

What is Redux?
- Redux is a Javascript library commonly used with React for state management. 
What is RTK Query?
- RTK Query is part of **Redux Toolkit** (RTK). It provides tools to manage server-side data fetching & caching within a Redux application. 


---
### <a name="misc-notes"></a> Misc Notes
#### Cookies
*Cookies are used for maintaining state such as session management, user preferences (personalization), tracking and analytics, shopping cart management 
for a SPA we can also utilize react to keep note of states for the app and not worry too much about using cookies*


### <a name="s&ms"></a> **Shorcuts and Macros**
#### Tab Shortcuts
- **rafce** &rarr; reactArrowFunctionExportComponent (requires ES7 extension)
- **afunc** &rarr; "() => {  }"
- **clog** &rarr; "console.log('');"
- **cllog** &rarr; "console.log(`: ${}`);"
- **req** &rarr; "require('');"
#### Custom Key bindings
- **Save All** &rarr; "ctrl+k ctrl+s"
- **Add ; to end** &rarr; "ctrl+;"
- **Quick WASD** &rarr; "ctrl+ i,j,k,l"
- **Delete Line** &rarr; "ctrl+backspace"

#### How to add User Snippets
> File &rarr; Preferences &rarr; Configure User Snippets &rarr; javacript.json
#### How to add Keybinds
> File &rarr; Preferences &rarr; Keyboard Shortcuts &rarr; (topright) Open Keyboard Shortcuts (JSON)


### <a name="apdx"></a> **Appendix**
#### Mongo-Sequence
 - [Documentation ↗](https://www.npmjs.com/package/mongoose-sequence)


