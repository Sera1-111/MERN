import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../CustomHook/useLogout';
import { useAuth } from '../CustomHook/UseAuth';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useLogout();
    const { user } = useAuth();
    const backendUrl = process.env.REACT_APP_BACKEND_URL; // Accessing backend URL from environment variable

    const logOutHandler = () => {
        logout();
        navigate('/');
    };

    return (
        <header>
            <div className="container">
                <h1>
                    <span style={{ color: '#4CAF50', marginRight: '5px' }}>Fit</span>Flow
                </h1>
                <nav>
                    {user ? (
                        <div>
                            <span style={{ color: 'white' }}>{user.username}</span>
                            <button onClick={logOutHandler}>Log-Out</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => { window.location.href = `${backendUrl}/login`; }}>Login</button>
                            <button onClick={() => { window.location.href = `${backendUrl}/signup`; }}>Signup</button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
