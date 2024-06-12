# <img src= "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Logo" width = "25" height = "25"> Redux Tutorial

### What is Redux?
Redux is a predictable state container for JavaScript applications, commonly used with React. It provides a centralized store to manage the state of your application. Redux follows a unidirectional data flow pattern, where actions trigger state changes via reducers. It promotes predictable and maintainable code by separating state logic from UI components.

>[!NOTE]
> Because Redux is primarily used with React, this tutorial also serves as a React review and tutorial. This Tutorial would have been better taken directly after a React introduction tutorial but was started midway through a MERN full stack tutorial. 

- [Video Tutorial](https://www.youtube.com/watch?v=NqzdVN2tyvQ&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo&index=8)
- [Source Code](https://github.com/gitdagray/react_redux_toolkit)


 
## Table of Contents
1. [Chapter 1: Setting Up](#ch1)
    - [Stores & Providers](#ch1.1)
    - [Slices & Reducers](#ch1.2)

#### Summary:
1. Install Redux
2. Created `app/store.js`

## <a name="ch1"></a> Setting up 
_create a react project_<br>
_install redux_
```bash
npx create-react-app my-app
npm install @reduxjs/toolkit react-redux
```
_clear misc react files_
- public → logo images
- src → [App.cs, App.test.js, logo,svg, reportWebVitals.js, setupTests.js]
- Remove reportwebvitals from index.js & logo import from App.js

### <a name="ch1.1"></a> Stores & Providers 
Created `app/store.js`
#### Stores 
Holds the state of the entire application and gives us some important methods to interact with the state.
- Created with `createStore`
- `getState();` Returns the current state of the application.
- `dispatch(action);` Dispatches an action to _change_ the state. Actions are plain JS objects that describe what happened and often contain a _type_ property that indicates the type of action being performed.
- `subscribe(listener)` Adds a change listener that will be called anytime an action is dispatched. It returns a function to unscubscribe the listener.

#### Provider 
The Provider is a component from the react-redux library, which is the **official binding library** for using Redux with React. The Provider makes the Redux store available to any nested components that need to access the Redux store. This is achieved through React's context feature.

_Wraps the root component in the react app in `index.js`_
```javascript
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the whole app w/ the redux provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### <a name="ch1.2"></a> Slices & Reducers 

#### Slices
A modular way to define a part of the state, as well as a way to seperate the states of different components. I.E. we could have slices for Authentication, and slices for objects in the app. 

#### Reducers
Reducers are _pure functions_ that specify how the states of the application changes in response to actions. Used inside and outside of Slices, 

> [!NOTE]
> When exporting a slice both the reducer actions, and the reducer itself needs to be exported.
```javascript
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```


