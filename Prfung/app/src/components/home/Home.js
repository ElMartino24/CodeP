import React from "react"
import useStyles from "./styles"
import {Box, ImageListItem, } from "@material-ui/core"
import Dashborad from "./Dasbhoard"



export default function Home() {

    const classes = useStyles()

    return(
        <div className={classes.width}>
            <h1 className={classes.headline}> Unsere größten aufträge</h1>
           <div className={classes.container}>
    
                        <Box display="Flex" >
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}} >      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>
                                                   
                        </Box>
                        
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}}>
                                        
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/Download.jpg" alt="T" className={classes.image}/>
                                                        
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>
                                </Box>
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}}>
                                        
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/Download.jpg" alt="T" className={classes.image}/>
                                                        
                                                        
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>
                                </Box>
                        </Box>
                        
                        <Box display="Flex" >
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}} >      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>           
                                                   
                        </Box>
                        
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}}>
                                        
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/Download.jpg" alt="T" className={classes.image}/>
                                                        
                                                        
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>  
                                </Box>
                                <Box flexGrow={1} style={{margin:"0px 50px 50px 50px", width:"15%"}}>
                                        
                                        <ImageListItem className={classes.imageListItem}>
                                                <img src="../assets/Download.jpg" alt="T" className={classes.image}/>
                                                        
                                                        
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>  
                                </Box>
                        </Box>
                        </div>

                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <div className={classes.navIcon}>
                        <Box display="Flex-wrap" >
                                <Box flexGrow={1} sstyle={{margin:"0px 50px 50px 50px", width:"15%"}}>      
                                        <ImageListItem className={classes.imageListItem}>
                                            <img src="../assets/Download.jpg" alt="" className={classes.image}/>                    
                                        </ImageListItem>
                                        <p style={{textAlign:"center"}}>
                                                Amsterdam
                                        </p>   
                                </Box>
                        </Box>
                        </div>
                        <Dashborad></Dashborad>
    
        </div>
    )
}