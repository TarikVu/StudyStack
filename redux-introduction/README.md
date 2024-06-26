# <img src= "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Logo" width = "25" height = "25"> Redux Tutorial

### What is Redux?
Redux is a predictable state container for JavaScript applications, commonly used with React. It provides a centralized store to manage the state of your application. Redux follows a unidirectional data flow pattern, where actions trigger state changes via reducers. It promotes predictable and maintainable code by separating state logic from UI components.

>[!NOTE]
> Because Redux is primarily used with React, this tutorial also serves as a React review and tutorial. This Tutorial would have been better taken directly after a React introduction tutorial but was started midway through a MERN full stack tutorial. 

- [Video Tutorial](https://www.youtube.com/watch?v=NqzdVN2tyvQ&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo&index=8)
- [Source Code](https://github.com/gitdagray/react_redux_toolkit)


 
## Table of Contents
[Setup](#setup)
1. [Making a basic Redux component](https://github.com/TarikVu/StudyStack/tree/main/redux-introduction/Chapter-1)
    - Stores & Providers
    - Slices & Reducers
    - Selector & Dispatch
    - Putting it alltogether


#### Summary:
1. Install Redux
2. Created `app/store.js`

## <a name="setup"></a> Setup 
_create a react project_<br>
_install redux_
```bash
npx create-react-app my-app
npm install @reduxjs/toolkit react-redux
```
_clear misc react files_
- public → logo images
- src → 
    1. `App.cs`
    1. `App.test.js` 
    1. `logo,svg` 
    1. `reportWebVitals.js` 
    1. `setupTests.js` 
- Remove reportwebvitals from index.js & logo import from App.js


