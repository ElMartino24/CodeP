import React, { useState } from "react";

export const authContext = React.createContext();

export default function AuthProvider(props){


    const [authState, setAuthState] = useState(false)

   

    function setLogin(){
        setAuthState(true)
        
    }

    return(

        <authContext.Provider value={{authState,  setLogin}}>
            {props.children}
        </authContext.Provider>

    )
}

