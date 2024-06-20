# Chapter 3: Async

1. [Thunks & Axios](#ta)
2. [extraReducers](#extra)

### Other Changes
- PostsExcerpt Addded to encapsulate the posts component.


## Thunks & Axios
### Thunks
The Primary way of writing async logic w/ redux. <br>
_"A peice of work that does some delayed work"_

_Importing from Redux_
```javascript
import { ... , createAsyncThunk } from "@reduxjs/toolkit";
```
### Axios
A popular promise-based HTTP client for making HTTP requests commonly used with Redux for API calls to fetch server data.

_Installing axios_
```bash
npm i axios
```

_Example Async call w/ Promise_
```javascript
// Fetching posts Asynchronously 
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    
    // Axios returns a promise
    const response = await axios.get(POSTS_URL)
    return response.data
})
```
### createAsyncThunk Lifecycle
When an async thunk is created using `createAsyncThunk`, Redux Toolkit automatically generates three action types:

- **Pending**: This action is dispatched when the async function starts.
- **Fulfilled**: This action is dispatched when the async function successfully completes.
- **Rejected**: This action is dispatched when the async function fails (e.g., due to an error).

## <a name="extra"></a> extraReducers
The extraReducers field in a slice is used to handle actions that are defined outside of the slice. This is useful when we want to respond to actions from other slices or from external action creators, such as those created by `createAsyncThunk` for handling asynchronous logic.

_Basic example of using extraReducers to handle thunk logic_
```javascript
// Extra reducers take a builder object,
extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                ...
```