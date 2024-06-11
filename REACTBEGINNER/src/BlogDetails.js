import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';


const BlogDetails = () => {

    // allows us to get the route parameters.
    const { id } = useParams();

    // The Id for this blog post is passed from use params,
    // we then utilize our use fetch to grab from the db w/ the id
    // those variables are then saved into blog, error & isLoading.
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();


    // Utilizes DELETE request 
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,
            {
                method: 'DELETE'
            })
            .then(() => {
                history.push('/');
            })
            ;
    }


    return (
        <div className="blog-details">
            {isLoading && <div>Loading....</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;