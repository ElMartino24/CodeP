import Dashboard from "../models/dashboardModel.js";


export const createDashboardPost = async (req, res, next) => {

    const {title, text, img} = req.body;
    const newDashboard = new Dashboard({title, text,img, userId: req.user})
    try{
        const dashboard = await newDashboard.save();
        res.status(201).json({
            message:"Post erfolgreich gespeichert",
            content: dashboard,
            isSuccess:true
        })
    }catch(err){
        res.status(500).json({
            message:"Post konnte nicht erfolgreich gespeichert werder",
            content: null,
            isSuccess:false
        })
    }
}

export const getDashboard = async(req, res, next) => {
    try{
       const dashboard = await Dashboard.find({}).populate("userId", "username")
 
       res.json({
          message: "Anime wurde gespreichert",
          content: dashboard,
          isSuccess:true
       })
    }catch(err){
       res.status(500).json({
          message:"Server error bitte erneut versuchen",
          content:null,
          isSuccess: false
       })
    }
 }

export const updateDashboard = async (req, res, next) => {

    const update = req.body

    const dashboard = await Dashboard.findByIdAndUpdate(update.id, {title: update.title, text:update.text}, {new: true})

    try{
        res.status(201).json({
            message:"Post wurde geupdatet",
            content:dashboard,
            isSuccess:true
        })
    }catch(err){
            res.status(500).json({
                message:"Server error bitte erneut versuchen",
                content:null,
                isSuccess:true
            })
    }
}

export const deleteDashboard = async(req, res, next) => {

    const deletePost = req.body

    const dashboard = await Dashboard.findByIdAndDelete(deletePost.id)

    try{
        res.json({
            message:"Post erfolgreich gelöscht",
            content:dashboard,
            isSuccess:true,

        })
    }catch(err){
        res.status(500).json({
            message:"Server error bitte erneut versuchen",
            content: null,
            isSuccess:false
        })
    }
}


