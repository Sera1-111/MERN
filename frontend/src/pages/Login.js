import { useState } from "react";
import { useLogin } from "../CustomHook/useaLogin";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); 
    const { login, isLoading, error } = useLogin();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        await login(username, email, password); //passing value to the login function
    };

    return (
        <div className="login-container">
            <form className="login" onSubmit={formSubmitHandler}>
                <h3>Login</h3>
                <label>Username:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button disabled={isLoading} type="submit">Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default Login;
