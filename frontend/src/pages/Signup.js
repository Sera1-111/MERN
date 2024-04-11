import { useState } from "react";
import { useSignup } from '../CustomHook/UseSignup';
import './Signup.css'

const Signup = () => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();
    
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        await signup(username, email, password);
    };

    return (
        <form className="signup" onSubmit={formSubmitHandler}>
            <h3>Sign-UP</h3>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} /> 
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button disabled={isLoading}>SUBMIT</button>
             {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Signup;
