// authController.js

const User = require('../Schema/userSchema');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login
const login = async (req, res) => {
    const {  email, password } = req.body; 
    
    try {
        // Checking if the user exists and password is correct
        const user = await User.login(email, password);
      
        // Generating a token
        const token = createToken(user._id);

        // Sending the token, username, and email in the response
        res.status(200).json({ username: user.username, email, token }); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Signup
const signup = async (req, res) => {
    const { username, email, password } = req.body; 

    try {
        // Creating a new user
        const user = await User.signup(username, email, password); 

        // Generating a token
        const token = createToken(user._id);

        // Sending the token, username, and email in the response
        res.status(200).json({ username: user.username, email, token }); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signup, login };
