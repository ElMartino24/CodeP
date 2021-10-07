import React, {useState, useContext} from "react";
import { TextField,IconButton, useTheme, Drawer, Divider, Button, Typography } from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { authContext } from "../../context/authContext";
import axios from "../../axios-instance"



export default function Login(props){


    const theme = useTheme()

    const context = useContext(authContext)

    const [loginState, setLoginState] = useState({
        username: "",
        password: "",

    })

    const [errorState, setErrorState] = useState(null)

    async function submitHandler(e){
        e.preventDefault();
        setErrorState(null)
        try{
            const {data} = await axios.post("/user/login", loginState)
           
            if(data.isSuccess === true){
                context.setLogin()
            }
        }catch(err){
            setErrorState(err.response.data.message)
        }

    }

 

    return(
        <div>
          <form onSubmit={(e) => {submitHandler(e)}}>
 <Drawer
        variant="persistent"
        anchor="right"
        open={props.logState}
       
      >
       
        <Divider />
        
        <TextField 
                    
                    variant="outlined"
                    name="username"
                    label="username"
                    open={props.logState}
                    value={loginState.username}
                    onChange={(e) => {setLoginState({...loginState, username: e.target.value})}}
                    />
                   
                    
                    <TextField 
                    variant="outlined"
                    name="password"
                    label="password"
                    type="password"
                    open={props.logState}
                    value={loginState.password}
                    onChange={(e) => {setLoginState({...loginState, password: e.target.value})}}
                   
                    />
                     <Button type="submit" variant="contained" color="primary" >
                        Login
                    </Button>
                    
                    {errorState && <Typography variant="caption" color="error">{errorState}</Typography>}
                     
                    <IconButton onClick={() => {props.setLogState(false)}}>
                          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
      </Drawer>
      </form>
        </div>
    )
}