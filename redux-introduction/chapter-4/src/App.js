import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        {/* These nested routes are used as the "outlet" aka placeholder */}


        <Route index element={<PostsList />} />

        {/* 
        ".../post" has us routed to the post creation 
        and any routes nested within thie route will be appended to the URL
        For example 
        - ".../post" routes to AddPostForm
        - ".../post/2" routes to SinglePostPage for post 2
        - ".../post/edit/2" routes to EditPostForm for post 2
        */}
        <Route path="post">

          <Route index element={<AddPostForm />} />

          <Route path=":postId" element={<SinglePostPage />} />
          
          <Route path="edit/:postId" element={<EditPostForm />} />

        </Route>

      </Route>
    </Routes>
  );
}

export default App;
