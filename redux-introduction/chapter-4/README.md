# Chapter 4: Blog Project 

1. [State Management with Redux](#state)
1. [Routing](#routing)
    - [Index Element](#index-element)
    - [Passing Parameters](#params)

<img src="https://github.com/TarikVu/imgs/blob/main/Redux-Intro/redux-ch4.PNG"></img>

#### Changes
- Utilizing routers from react 
- Added `components` dir for layout and header.

## <a name="state"></a> State Management with Redux
- **Slice**<br>
    - A slice is a portion of the Redux state. It typically represents a specific part of your application state, such as user, todos, posts, etc.

- **Reducer**<br>
    - A reducer is a function that specifies how the application's state changes in response to actions dispatched to the Redux store.
    - Reducers specify how the **slice's state** should be updated based on the action type and payload.
    - Reducers are pure functions, meaning **they should not modify the state directly but return a new state object**.

- **Store**<br>
    - The store is a centralized place that holds the entire state tree of the application & allows state updates through dispatched actions.

- **Provider**<br>
    - Makes the Redux store available to any nested components that need to access the Redux store.

## <a name="routing"></a> Routing
When defining a route, the nested routes within are appended on the URL route. Whereas the top level dictates the parent route.  A parent route does not require an `index element`.

### <a name="index-element"></a> Index Element
When a route is nested (a child) within another route, there needs to be a default route to a component. IE the `index element` must be defined, before alternative routes may be set.  For example `/post` directs to the `<AddPostForm/>` default component. 
whereas `/post/2` will direct to the `<SinglePostPage/>` component with the id of `2`.

```javascript
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        {/* defaulted route for parent */}     
        <Route index element={<PostsList />} /> 
        <Route path="post">
          {/* defaulted route for /post */}
          <Route index element={<AddPostForm />} /> 
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
```

### <a name="params"></a> Passing Parameters

#### **useParams()**
A Hook that allows us to use the parameters from the URL. Where the parameter is dictated with a semicolon
`":postId"`

 _inside `App.js`_
```javascript
<Route path="post">
    <Route index element={<AddPostForm />} />
    <Route path=":postId" element={<SinglePostPage />} />
    <Route path="edit/:postId" element={<EditPostForm />} />
</Route>
```

_inside `SinglePostPage.js`_
```javascript
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import { useParams } from 'react-router-dom';
...
const { postId } = useParams()
// useSelector lets us use the function from our slice
const post = useSelector((state) => selectPostById(state, Number(postId)))

```


