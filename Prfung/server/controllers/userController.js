import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const loginAction = async (req, res, next) => {

    
    try {
        const {username, password} = req.body

        const user = await User.findOne({username});
        if(!user){
         return res.status(422).json({
             message: "Username existiert nicht",
             content: null,
             isSuccess: false
         })
        }

        let hashedPassword = await bcrypt.compare(password, user.password);
        
        
        if(!hashedPassword){
         return res.status(401).json("wrong password")
        }
        
        const id = user.id
        
        let accessToken = jwt.sign(
          {userId: id},
          process.env.JWT_SECRET
        ); 
            
       
        res.cookie("token", accessToken, {
         httpOnly: true,
       });
     
     
        res.status(201).json({
            message: "Erfolgreich eingellogged",
            content: user.id,
            isSuccess: true
        })     
    } catch(err){
        res.status(500).json({
            message: "Server Error!!!",
            content: null,
            isSuccess: false
        })
    }
    
}


