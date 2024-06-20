import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch();

    // access the states of our slice.
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        
        // Check if a fetch has been made yet
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    },
    // Dependency array for useEffect
    // Review: useEffect will invoke when the component is first mounted or if
    // an item in the dependencys change.
    [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {

        content = <p>"Loading..."</p>;

    } else if (postStatus === 'succeeded') {

        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)

    } else if (postStatus === 'failed') {

        content = <p>{error}</p>;

    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList