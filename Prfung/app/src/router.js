import React, {useState} from "react";
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/shared/navbar/NavBar"
import SideBar from "./components/shared/sidebar/SideBar";
import Home from "./components/home/Home"
import Login from "./components/login/login"

function Router() {

    const [navState, setNavState] = useState(false)
    
    const [logState, setLogState] = useState(false)

    return (
        <div>
            <NavBar setNavState={setNavState} setLogState={setLogState}/>
            <SideBar navState={navState} setNavState={setNavState} logState={logState} setLogState={setLogState}/>
            <Login logState={logState} setLogState={setLogState}/>

           
                <Switch>
                    
                    <Route exact path="/" component={Home}/>
                </Switch>
           
            

        </div>
    )
}

export default Router