import React, { useContext, useEffect, useState } from "react"
import { Button, Paper, TextField, Typography} from "@material-ui/core"
import axios from "../../axios-instance"
import { authContext } from "../../context/authContext"
import GetDashboard from "./GetDashboard"

export default function Dashborad(){
    
    const context = useContext(authContext)

    const [allPosts, setAllPosts] = useState([])

    const [createPostFields, setCreatePostFields] = useState({
        title:"",
        text:"",
    })

    useEffect(() => {

        (async() => {
            try{
                const {data} = await axios.get("http://localhost:8080/api/dashboard/")
                const dashboard = data.content;
                setAllPosts(dashboard)
            }catch(err){
                console.log(err)
            }
        })()
    }, [])

    const [errorState, setErrorState] = useState(null)

    async function submitHandler (e) {
        e.preventDefault()
        setErrorState(null)
       try{
        const {data} = await axios.post("/dashboard/createBlog/", createPostFields)
        setAllPosts([...allPosts, data.content])
       }catch(err){
           console.log(err)
           setErrorState(err.response.data.message)
       }
    }

    return(
        <Paper elevation={3}>
            {context.authState && (
                <Typography variant="h2" align="center">
                    Create Post
                </Typography>
            )}

            {context.authState && (

                <form onSubmit={(e) => submitHandler(e)}>
                     <TextField
                    variant="outlined"
                    fullWidth
                    name="title"
                    label="title"
                    value={createPostFields.title}
                    onChange={(e) => setCreatePostFields({...createPostFields, title: e.target.value})}
                />
                <TextField
                    
                    minRows={10}
                    multiline
                    variant="outlined"
                    placeholder="New Post"
                    name="text"
                    value={createPostFields.text}
                    onChange={(e) => setCreatePostFields({...createPostFields, text: e.target.value})}
                />
                <Button type="submit" variant="contained" >
                    Erstelle einen neuen Eintrag
                </Button>
                {errorState && <Typography variant="caption" color="error"> {errorState}</Typography>}

                </form> 
            )}
            <div>
                        
                        <Typography variant="h1" align="center" > Infos</Typography>
                                <Typography align="center" > Um unseren Blog als Admin zu bearbeiten,</Typography>
                          
                        
                        
                   </div>
                <GetDashboard allPosts={allPosts} setAllPosts={setAllPosts}></GetDashboard>
        </Paper>
    )
}