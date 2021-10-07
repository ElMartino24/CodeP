import React, {useContext} from "react"
import { Typography } from "@material-ui/core"
import { authContext } from '../../context/authContext';
import UpdateDashboard from './UpdateDashboard';



export default function GetDashboard(props){

    const context = useContext(authContext)
    

    return (
        <div>
            {
                props.allPosts.map((dashboard) => {
                    return(<div >
                        <Typography variant="h4" > {dashboard.title}  </Typography>
                            <div key={dashboard._id} >
                                <div >
                                    <div >
                                        <Typography > {dashboard.text} </Typography>
                                    </div>
                                    <Typography variant="h4" > {dashboard.userId.username} </Typography>
                                    </div>
                                    {context.authState && (
                                <div >
                                    <UpdateDashboard dashboard={dashboard} allPosts={props.allPosts} setAllPosts={props.setAllPosts} />
                            </div>
                            )}
                    
                            </div>
                            </div>
                        
                    )
                })
            }
        </div>
    )
}