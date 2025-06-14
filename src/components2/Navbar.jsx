import {Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {isAuthenticated, logout} = useAuth()
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            {
                isAuthenticated ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                )
                :
                (
                    <Link to="/login">Login</Link>
                )
            }
        </nav>
    )
}
export default Navbar;