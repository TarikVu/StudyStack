import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // Fetch from the server 
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
        //const newBlogs = blogs.filter(blog => blog.id !== id)
        //setBlogs(newBlogs);
    }


    return (
        <div className="home">
            
            {/* if loading, then show loading, if blogs exist show bloglist component */}
            {error && <div> {error} </div>}
            {isLoading && <div> Loading... </div>}
            
            {blogs && <BlogList 
            blogs={blogs} 
            title="All Blogs" 
            handleDelete={handleDelete} />}

        </div>
    );
}

export default Home;