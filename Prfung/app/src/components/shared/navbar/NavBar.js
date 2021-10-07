import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import  useStyles from "./styles"
import VpnKeyIcon from '@mui/icons-material/VpnKey';

//import { authContext } from '../../../../context/authContext.js';
//import axios from "../../../../axios-instance"


function Navbar(props){

   //const context = useContext(authContext)

   
    
    const classes = useStyles()
    return (
       <nav className={classes.navbar}>
           <div className={classes.navContainer}>
                <NavLink to="/" className={classes.navLogo}>
                   Logo des Unternehmens
                </NavLink>
            <ul className={classes.navMenu}>
                <li className={classes.navItems}>
                    <NavLink to="/" className={classes.navLinks}>
                        Startseite
                    </NavLink>
                </li>
                <li className={classes.navItems} >
                    <NavLink to="/ranking" className={classes.navLinks} >
                        Kontakt
                    </NavLink>
                </li>
                <li className={classes.navItems}>
                   <IconButton className={classes.navLinks} onClick={() => props.setLogState(true)}>
                        <VpnKeyIcon  />
                    </IconButton>
                </li>    
                
            </ul>
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => props.setNavState(true)} className={classes.navIcon}>
                    <MenuIcon></MenuIcon>
                </IconButton>
            </div>
       </nav>
    )
}


export default Navbar