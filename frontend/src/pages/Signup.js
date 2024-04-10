import { useState } from "react";
import { useSignup } from '../CustomHook/UseSignup';
import './Signup.css'

const Signup = () => {
    const [username, setUsername] = useState(''); // Added username state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();
    
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        await signup(username, email, password); // Modified signup function call to include username
    };

    return (
        <form className="signup" onSubmit={formSubmitHandler}>
            <h3>Sign-UP</h3>
            <label>Username:</label> {/* Added username input */}
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} /> {/* Added username input */}
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
