import React, {useState} from "react"
import { TextField, Button, Typography } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import axios from "../../axios-instance"


export default function UpdateDashboard(props){


    const {title, text} = props.dashboard

    const [dashboardState, setDashboardState] = useState({title, text})

    const filteredState = props.allPosts.filter((dashboard) => dashboard._id !== props.dashboard._id)

    const [errorState, setErrorState] = useState(null)

    async function buttonHandler(e){
        e.preventDefault()
        try{
            const {data} = await axios.patch("/dashboard/updateBlog/", {title: dashboardState.title, text: dashboardState.text, id: props.dashboard._id})
            props.setAllPosts([ data.content, ...filteredState])
        }catch(err){
            setErrorState(err.response.data.message)
        }
    }



    async function deleteHandler(e){
        e.preventDefault()
        try{
            await axios.post("/dashboard/deleteBlog/", {id: props.dashboard._id, userId: props.dashboard.userId})
            props.setAllPosts([...filteredState])
        }catch(err){
            console.log(err)
        }
        
    }
    

return(




    <div>
        <div>         
            <TextField
            minRows={5}
            variant="outlined"
            label="Update Title"
            onChange={(e) => setDashboardState({...dashboardState, title: e.target.value})}

            >
            </TextField>
            <TextField
            minRows={5}
            variant="outlined"
            label="Update Text"
            multiline
            color="primary"
            onChange={(e) => setDashboardState({...dashboardState, text: e.target.value})}
            />
            </div>  
            <Button variant="contained"  onClick={(e) => buttonHandler(e)}>
                <UpdateIcon/>
             </Button>
             
            <Button variant="contained"   onClick={(e) => deleteHandler(e)} >
                <DeleteIcon/>
            </Button>
            {errorState && <Typography variant="caption" color="error">{errorState}</Typography>}
            
    </div>
)
}