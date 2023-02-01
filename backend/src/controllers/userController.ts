import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';
import { Request, Response } from 'express';

export interface UserInfoRequest extends Request {
    user: any
}


//Register User Route: POST /api/users/
const registerUser = (async (req: Request, res: Response) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400) 
        throw new Error('Please add all fields')
    }
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    //hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
       name, email, password: hashedPassword 
    })
    if(user) {
        res.status(201).json({ 
            _id: user.id, 
            name: user.name, 
            email: user.email,
            token:  generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('User data not Valid')
    }
})

//Login User Route: POST /api/login
const loginUser = (async (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name, 
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid input')
    }
})
//Get User data Route: GET /api/users/me
const getMe = (async (req: UserInfoRequest, res: Response ) => {
    //@ts-ignore
    const { _id, name, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name, 
        email,
    })
})

//Generate JWT 
const generateToken = (id: any) => {
    //@ts-ignore
    return jwt.sign({ id}, process.env.JWT_SECRET, {
        expiresIn: '5000d',
    }) 
}
module.exports = {
    registerUser,
    loginUser,
    getMe
}