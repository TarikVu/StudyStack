# Chapter 2: App Structure & Data Flow (User Post Form Component)

1. [The Form](#form)
    - [Data Flow from Component to slice](#flow)
    - [Reducers Reducer & Prepare](#rrp)
1. [The list of posts](#list)

<img src = 'https://github.com/TarikVu/imgs/blob/main/Redux-Intro/redux-ch2.PNG' width= 180 height = 330/> 

#### Overall Structure Summary
This app is a simple post creation that subimts a form and then has a secondary component to view 
the forms as a list with reaction buttons.<br>
When viewing `App.js` we can see the two main components:
```html
<AddPostForm />
<PostsList />
```
## <a name = "form"></a> 1. The Form

### <a name = "flow"></a> Data Flow from component to slice

1. **FormComponent** `dispatch(postAdded(title, content, userID))`
    - _sends data_<br>
2. **postsSlice** `prepare(title,content,userId)`
    - _creates & returns payload_<br>
3. **postsSlice** `reducer(state,action)`
    - _pushes changes to state_<br>

### <a name="rrp"></a>  Reducers Reducer & Prepare

#### Prepare
When creating an object that needs to be pushed to the state (such as a post) "prepare" will structure the object for us as a payload that is then returned.

#### Reducer within 'reducers'
The naming convention here is a little strange at first, but this `reducer(state,action)` is here specifically as a way to push a payload (from prepare) to the state. And should not be confused with the `reducers:{}` for the slice.  This lower level reducer will reside within the slice's reducer. 

## <a name = "list"></a> 2. The List of posts
`PostsList.js`<br>

```javascript
import { selectAllPosts } from "./postsSlice";
...
// Grab our posts w/ the selector, create a shallow copy w/ slice() and then order the posts.
const posts = useSelector(selectAllPosts);
const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

// Render the posts after ordering them.
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">

                {/* post.userId, and date defined in slice's prepare()  */}
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))
    // return the JSX to be displayed for this component.
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
```
### Summary
After grabbing and ordering the data of ordered posts, we call `map()` on this array in order to wrap the posts in an `<article>` element.  When mapping we utilize the posts' fields (setup within `prepare` in the slice) to display the userId, timestamp and reaction buttons.  