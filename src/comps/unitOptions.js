import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    radioContainer:{
      display:'flex',
      flexDirection:'row'
    },
    text:{
        fontWeight:600,
        color:"primary"
    },
  }));

  export default function UnitOptions({ props }){
    const classes = useStyles();
    return(
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className= {classes.container}
            >
                <FormControl component="fieldset">
                    <RadioGroup className={classes.radioContainer} aria-label="unit" name="unit1" value={props.unit} onChange={props.handleChange}>
                        <FormControlLabel 
                            className={classes.text} 
                            value="metric" 
                            control={<Radio 
                                color="primary"
                                disableRipple
                                classes={{root: classes.radio, checked: classes.checked}}
                                />} 
                            label="°C" />
                        <FormControlLabel 
                        className={classes.text} 
                        value="imperial" 
                        control={<Radio 
                            color="primary"
                            disableRipple
                            classes={{root: classes.radio, checked: classes.checked}}
                        />} 
                        label="°F" />
                    </RadioGroup>
                </FormControl>
        </Grid>
    )
}