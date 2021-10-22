import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/"><h4>Project Manager</h4></Link>
            <div className="links">
                <Link id = "addProjectBtn" to="/create">Add New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;