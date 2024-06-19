# Chapter 3: Async

1. [Thunks & Axios](#ta)
    - []()



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