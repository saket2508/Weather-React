import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from './weatherIcon';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom:theme.spacing(5),
    },
    flagIcon:{
        // marginTop: theme.spacing(0.5),
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginLeft: theme.spacing(0.2)
    },
    location:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',   
        marginBottom: theme.spacing(0.5),
    },
    time:{
        marginBottom: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5)
    },
    mainTemp:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginBottom: theme.spacing(1),
    },
    maxMinTemp:{
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(0.5)
    },
    desc:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    media: {
      height: 200,
    },
    feelsLike:{
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(0.5)
    },
    row:{
        marginLeft: theme.spacing(0.5),
        marginBottom: theme.spacing(0.25),
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
    }
  }))


const HeaderImage = ({day, description}) =>{
    const classes = useStyles();
    if(description==="Clear"){
        if(day){
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
                />
            )
        }
        else{
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1499623838158-29acea518eaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
                />
            )
        }
    }
    else if(description==="Rain"){
        return(
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Weather image"
            />
        )
    }
    else if(description==="Haze" || description==="Mist" || description==="Smoke"){
        return(
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1532300481631-0bc14f3b7699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Weather image"
            />
        )
    }
    else if(description==="Thunderstorm"){
        return(
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1598822200977-c1ba2ff2e63b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Weather image"
            />
        )
    }
    else if(description==="Clouds"){
        if(day){
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1567686276517-aaca8166b4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
                />
            )
        }
        else{
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1576668778848-93c8b6436c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
            />
            )
        }
    }

    else{
        if(day){
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1556326059-3cfc41f90fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
                />
            )
        }
        else{
            return(
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1514729797186-944d57303199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Weather image"
                />
            )
        }
    }
}



export default function CardWeather({ weather }){
    const classes = useStyles();
    return(
        <div className={classes.root}>
              <Grid
                container
                direction="row"
                justify="center"
                >
                    <Grid item xs={10} sm={8} md={5}>
                        <Card>
                            <HeaderImage day = {weather.day} description= {weather.description}/>
                            <CardContent>
                                <div className={classes.location}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:'400', marginRight:'4px'}}>
                                    {weather.name}, {weather.country}
                                    </Typography>
                                    {/* <div classNam="flag">
                                        <img className="flag-icon" src={`https://www.countryflags.io/${weather.country}/flat/32.png`}/>
                                    </div> */}
                                    <Avatar className={classes.flagIcon} alt={weather.ca} src={`https://disease.sh/assets/img/flags/${weather.country.toLowerCase()}.png`}/>
                                </div>
                                <div className={classes.time}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                    {weather.localTime}
                                    </Typography>
                                </div>
                                <div className={classes.maxMinTemp}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                    Day {weather.maxTemp}{weather.unit}  -  Night {weather.minTemp}{weather.unit}
                                    </Typography>
                                </div>
                                <div className={classes.mainTemp}>
                                    <Typography variant="h2" color="textSecondary">
                                    {weather.temp}{weather.unit}
                                    </Typography>
                                    <div className="weather-description">
                                        <WeatherIcon description = {weather.description} day = {weather.day}/>
                                        <div className={classes.desc}>
                                            <Typography variant="subtitle2" color="textSecondary">
                                            {weather.description}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.row}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Humidity: {weather.humidity}%
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Precip: {weather.precipitation}%
                                    </Typography>
                                </div>
                                <div className={classes.row}>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Wind: {weather.windSpeed} {weather.unit2}, {weather.direction}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Pressure: {weather.pressure}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    )
}
