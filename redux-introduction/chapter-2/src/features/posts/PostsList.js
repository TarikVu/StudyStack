import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


// The PostLists component that is displays all the current posts
const PostsList = () => {

    // Our post slice
    const posts = useSelector(selectAllPosts)

    // create a shallow copy w/ .slice and then sort the elements
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // render the posts after ordering them.
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

    // The JSX to be displayed for this component.
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList