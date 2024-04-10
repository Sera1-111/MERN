// userSchema.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

// Static method for user signup
userSchema.statics.signup = async function(username, email, password) {
  // Validation
  if (!email || !password || !username) {
    throw new Error('Fill all the fields');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Password not strong enough');
  }

  // Checking if the email already exists
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Creating a new user
  const user = await this.create({
    username,
    email,
    password: hashedPassword
  });

  return user;
};

// Static login method

// Static login method
userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw new Error('Fill all the fields');
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid Credentials');
  }
  return user;
};



module.exports = mongoose.model('User', userSchema);
