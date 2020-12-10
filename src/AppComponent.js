import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import {TextField} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles({
  Grid:{
      width: '100%',
      height: '100%',
      paddingTop: '20px',
      paddingLeft: '28px',
      paddingRight: '10px',
      backgroundColor: 'lavender'
  },
Card:{
       textAlign: 'center',
      color:  'secondary',
      backgroundColor: 'success',
      
    },
CardContent:{
    height: '300px',
},

Card1:{
    textAlign: 'center',
   color:  'secondary',
   backgroundColor: 'success',
   marginTop: '10px'
 },
CardContent1:{
 height: '10px',
},

Card2:{
    textAlign: 'center',
   color:  'secondary',
   backgroundColor: 'success',
 },
CardContent2:{
 height: '540px',
} ,
Card3:{
    textAlign: 'center',
   color:  'secondary',
   backgroundColor: 'success',
   marginTop: '15px'
 },
CardContent3:{
 height: '300px',
},
searchContainer:{
  display: 'Flex',
  flexDirection: 'row',
  width: '100%',
  backgroundColor: 'lightGrey',
  alignItems: 'center'
},
searchIcon:{
    padding: '7px',
    alignSelf: 'center'
} ,
searchInput:{
   paddingBottom: '10px',
    fontWeight: 'lighter',
    fontSize: "10%",
   
} ,
cardData:{
  alignSelf: 'center',
  paddingTop:'30px',
},
image:{
    height:'300px',
    marginBottom : '10px'
}        
})

const AppComponent = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row"
        justify="space-evenly" spacing={3} className={classes.Grid}>
        <Grid item xs={12} sm={2} >
           <Card className={classes.Card} >
               <CardContent className={classes.CardContent}></CardContent>
           </Card> 
           <Card className={classes.Card1} >
               <CardContent className={classes.CardContent1}></CardContent>
           </Card>
        </Grid> 

        <Grid item xs={12} sm={6}>
           <Card className={classes.Card2} >
               <CardContent className={classes.CardContent2}>
                   <div className={classes.cardData}>
                   <img className={classes.image}src="https://previews.123rf.com/images/binaryproject/binaryproject1510/binaryproject151000001/46550601-software-engineering-development-workspace.jpg"
                   alt=""></img><br/>
                   <strong>Hmm, no Class or Series drafts here</strong>
                   <p>Maybe you have published them all, or haven't created any yet? either way <br/>
                   there is no time like present to create a new Class or series!</p><br/>
                   <Button variant="contained" color="primary">
                    Create a new Class or a Series
                   </Button>
                   </div>
               </CardContent>
           </Card> 
        </Grid> 

        <Grid item xs={12} sm={4}>
            <div className={classes.searchContainer}>
                <SearchIcon className={classes.searchIcon}/>
                <TextField className={classes.searchInput}
                  label="Search In Drafts..."
                />
            </div>
           <Card className={classes.Card3} >
               <CardContent className={classes.CardContent3}></CardContent>
           </Card> 
        </Grid> 

       
        </Grid>
    )
}

export default AppComponent;
