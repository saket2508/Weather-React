import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width:"250px",
    },
  }));

  function AlertInfo(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SearchBar = ({props}) => {
    const classes = useStyles();

    const [ alert, setAlert ] = useState(true)


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };

    return(
   <React.Fragment>
        <div className={classes.root}>  
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item xs={9} md={4}>
                        <TextField 
                            error
                            id="filled-basic" 
                            label="Search..." 
                            variant="filled" 
                            autoComplete='off'
                            error = {(props.error) ? true : false}
                            onChange = {e => props.setQuery(e.target.value)}
                            value = {props.query}
                            helperText={(props.error) ? "Enter a valid location" : "Enter a city to begin"}
                            fullWidth
                            InputProps={{
                                endAdornment: 
                                <InputAdornment position="end">
                                     <IconButton
                                        aria-label="search input"
                                        onClick={props.search}
                                        edge="end"
                                        >
                                            <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>,
                            }}/>  
                        </Grid>
                </Grid>  
    </div>

    <div>
        <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'center'}} transitionDuration={{enter:3000}} open={alert} onClose={handleClose}>
            <AlertInfo onClose={handleClose} severity="info">
                Tip: If you don't see the place you entered, try adding its country or zip code at the end, Ex: Alberta, CA
            </AlertInfo>
        </Snackbar>
    </div>

   </React.Fragment>
    )
}

export default SearchBar;