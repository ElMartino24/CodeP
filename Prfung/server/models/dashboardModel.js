import mongoose from "mongoose"

const Schema = mongoose.Schema;


const dashboardSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
    ,
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

const Dashboard = mongoose.model("Dashboard", dashboardSchema);
export default Dashboard;