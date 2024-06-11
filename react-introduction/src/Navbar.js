import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <Link to = "/">
            <h1> Ai PlaylistPal </h1>
            </Link>

            <div className="links">
                {/* utilze "Link" to use the react router instead of "a" (anchor) */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

            </div>
        </nav>
    );
}

export default Navbar;
