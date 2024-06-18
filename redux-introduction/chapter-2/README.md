# Chapter 2: App Structure & Data Flow (User Post Form Component)

- [Reducers Reducer & Prepare](#rrp)

<img src = 'https://github.com/TarikVu/imgs/blob/main/Redux-Intro/redux-ch2.PNG' width= 180 height = 330/> 

### <a name="rrp"> Reducers Reducer & Prepare

#### Prepare
When creating an object that needs to be pushed to the state (such as a post) "prepare" will structure the object for us as a payload that is then returned.

#### Reducer within 'reducers'

The naming convention here is a little strange at first, but this `reducer(state,action)` is here specifically as a way to push a payload (from prepare) to the state. And should not be confused with the `reducers:{}` for the slice.  This lower level reducer will reside within the slice's reducer. 

#### From form component to updating the slice (state)

FormComponent `dispatch(postAdded(title, content, userID))`:_sends data_<br>
postsSlice `prepare(title,content,userId)`:_creates & returns payload_<br>
postsSlice `reducer(state,action)`:_pushes changes to state_<br>