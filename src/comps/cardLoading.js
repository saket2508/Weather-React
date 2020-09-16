import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from './weatherIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom:theme.spacing(5),
    },
}))

const CardLoading = () => {
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
                        <Skeleton variant="rect" animation="wave" height={200} width="100%" style={{ marginBottom: 6 }} />
                         <CardContent>
                                <React.Fragment>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={20} width="40%"/>
                                        <Skeleton animation="wave" height={10} width="30%" />
                                        <Skeleton animation="wave" height={10} width="30%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={30} width="100%"/>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"5px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"5px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                </React.Fragment>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardLoading;