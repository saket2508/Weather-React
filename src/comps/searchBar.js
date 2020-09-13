import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

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

const SearchBar = ({props}) => {
    const classes = useStyles();
    return(
    <div className={classes.root}>  
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item xs={8} md={4}>
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
    )
}

export default SearchBar;