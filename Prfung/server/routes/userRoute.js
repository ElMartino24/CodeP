import {Router} from "express";

import {  loginAction } from "../controllers/userController.js";

import {loginValidation} from "../middleware/userMiddleware.js";


const router = Router();







//@route POST /api/user/login
//@desc login a Acount
router.post("/login", loginValidation, loginAction)




export default router;