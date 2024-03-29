import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from "express-async-handler"
const protect = asyncHandler((req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
console.log(req.headers.authorization)

    try {
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
       console.log(decoded)
        
        next()
    } catch (error) {
        
    }
}


if(!token){
    res.status(401)
    throw new Error('Not authorized,no token')
}

next()
})

export {protect}