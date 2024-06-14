# Chapter 1: Making a basic Redux component

- [Stores & Providers](#ch1.1)
- [Slices & Reducers](#ch1.2)
- [Selector & Dispatch](#ch1.3)
- [Putting it alltogether](#ch1.4)

_Preview:_

<img src = "https://github.com/TarikVu/imgs/blob/main/Redux-Intro/redux-ch1.png"/>


### <a name="ch1.1"></a> Stores & Providers 
#### Stores 
Holds the state of the entire application and gives us some important methods to interact with the state.
- Created with `createStore`
- `getState();` Returns the current state of the application.
- `dispatch(action);` Dispatches an action to _change_ the state. Actions are plain JS objects that describe what happened and often contain a _type_ property that indicates the type of action being performed.
- `subscribe(listener)` Adds a change listener that will be called anytime an action is dispatched. It returns a function to unscubscribe the listener.

#### Provider 
_Wraps the root component in the react app in `index.js`_

The Provider is a component from the react-redux library, which is the **official binding library** for using Redux with React. The Provider makes the Redux store available to any nested components that need to access the Redux store. This is achieved through React's context feature.


### <a name="ch1.2"></a> Slices & Reducers 
#### Slices
A modular way to define a part of the state, as well as a way to seperate the states of different components. I.E. we could have slices for Authentication, and slices for objects in the app. 

> [!NOTE]
> When exporting a slice both the reducer actions, and the reducer itself needs to be exported.

#### Reducers
Reducers are _pure functions_ that specify how the states of the application changes in response to actions. Used inside and outside of Slices, 

### <a name="ch1.3"></a> Selector & Dispatch
These are hooks from the `react-redux` library that allows us to have our **Components** interact with the Redux **store**. 
- `useSelector()` extracts data from Redux store.
- `useDispatch()` sends (dispatches) actions to the Redux store.

### <a name="ch1.4"></a> Putting it altogether
### 1. Create `store.js` (in this example it's in **src &rarr; app &rarr; store.js** )
```javascript
import { configureStore } from "@reduxjs/toolkit";

// Import slice reducers to mount 
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore(
    {
        reducer: {
            // Mount our reducers to the store
            counter: counterReducer
        }
    }
)
```
### 2. Inside index.js import store and Provider, then wrap `<App>` with the provider, passing (injecting) store into the provider.

`index.js`
```javascript
...
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
### 3. Make the slice & reducers for the slice.

`counterSlice.js`
```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    // Reducer for state changes:
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 }
    }
});

// Both exports are needed (the actions, and the reducer itself).
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```
### 4. Import & Mount the reducer

`store.js`
```javascript
...
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore(
    {  
        reducer: {
            // Mount our reducers to the store
            counter: counterReducer
        }
    }
)
```
### 5. Create the component of the slice utilizing useSelector & useDispatch

`Counter.js`
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

// Our Counter Component
const Counter = () => {

    // Grab counter state from store
    const count = useSelector((state) => state.counter.count);

    // useDispatch to call reducer functions
    const dispatch = useDispatch();
    
    return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = {() => dispatch(decrement())}>-</button>
        </div>
    </section>
    )
}

export default Counter
```