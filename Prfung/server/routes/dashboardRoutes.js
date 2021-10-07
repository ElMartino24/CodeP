import {Router } from "express"

import { isAuth } from "../middleware/isAuthMiddleware.js"
import { createDashboardPost, updateDashboard, getDashboard, deleteDashboard  } from "../controllers/dashboardController.js"



const router = Router()


router.post("/createBlog", isAuth, createDashboardPost)

router.get("", getDashboard)

router.patch("/updateBlog", updateDashboard)

router.post("/deleteBlog", deleteDashboard)


export default router