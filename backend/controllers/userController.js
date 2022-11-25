const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')


// Register new user 
//route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('All fields are required');
    }
    //Check for user 
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400)
        throw new Error('User already exists');
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user 
    const user = await User.create({ name, email, password: hashedPassword })

    if(user) {
        res.status(201).json({ 
            _id: user.id, 
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }   else {
        res.status(400)
        throw new Error('User information not Valid')
    }
})

//Authenticate a user
//route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    //Check for user email and pasword
    if(user && (await bcrypt.compare(password, user.password))) {

    res.json({
        _id: user.id, 
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
} else {
    res.status(400)
    throw new Error ('Missing or incorrect information')
}
})

//Get user information
//route GET /api/users/me
//make route private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})


//JWT_Token generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5000d',
    })
}

module.exports= { registerUser, loginUser, getMe }