import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => {
        return{
            background:{
                width:"100%",
                marginTop:"2px",
                overflow:"hidden",
                height:"auto",
                
            },container:{
                [theme.breakpoints.down('sm')]: {
                    display:'none',
                  },        
            },imageListItem:{
                listStyle:"none",
            },image:{
                width:"100%",
                height:"auto",
            },imageListItemBar:{
                width:"100%",
                height:"auto",
            },secondImage:{
                width:"100%",
                
            },containerWrap:{
                display:"flex",
                flexWrap:"wrap",
                width:"100%"
            },headline:{
                width:"100%",
                textAlign:"center"
            },navIcon:{
                display:'none',
                marginRight: theme.spacing(2),
                [theme.breakpoints.down('sm')]: {
                    display:"block",
                    width:"85%",
                    margin:"auto"
                    
                  },
            },
        }
})


export default useStyles