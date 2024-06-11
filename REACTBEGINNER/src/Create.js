import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevents page from being refreshed upon submit
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);
        fetch('http://localhost:8000/blogs',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
            .then(() => {
                console.log("new blog added");
                setIsPending(false);
                
                // Redirect back to homepage to see newly added blog.
                history.push('/');
            }
            );
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input required
                    type="text"
                    value={title}
                    placeholder="Enter a title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea required
                    value={body}
                    placeholder="What do you want to talk about?"
                    onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {/* Buttons inside forms implicitly invoke onsubmit unless the type is specified. */}
                
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Uploading...</button>}

                {/* debugging purposes remove later. */}
                <p>{title}</p>
                <p>{author}</p>

            </form>
        </div>
    );
}

export default Create;