import { Link } from "react-router-dom";

/* 
A component signifying a blog list. props is passed from home.
Here we pass the blogs array, a title for the component and a handleDelete function.  
the Handle delete function is stored on home so that we have better direct access to the information.
*/
const BlogList = ({ blogs, title, handleDelete }) => {

    // const blogs = props.blogs;
    // const title = props.title; 

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>

                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p> Written by {blog.author}</p>
                            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                        </Link>

                    </div>

                ))
            }
        </div>
    );
}

export default BlogList;