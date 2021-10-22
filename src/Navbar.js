import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="d-flex flex-row justify-content-between navbar">
            <Link to="/"><h4>Project Manager</h4></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link id = "addProjectBtn" to="/create">Add New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;