import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const {login} = useAuth();

    const handleLogin = () => {
        login();
        navigate("/dashboard")
    }

    return (
        <div>
            <h1>login page hai ye</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;