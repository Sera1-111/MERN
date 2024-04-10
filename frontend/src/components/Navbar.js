import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../CustomHook/useLogout';
import { useAuth } from '../CustomHook/UseAuth';
import './Navbar.css'

const Navbar = () => {
    const Navigate = useNavigate();
    const { logout } = useLogout();
    const { user } = useAuth();

    const logOutHandler = () => {
        logout();
        Navigate('/'); // Redirect to the intro page after logout
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
                            <button onClick={() => { window.location.href = '/login'; }}>Login</button>
                            <button onClick={() => { window.location.href = '/signup'; }}>Signup</button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
