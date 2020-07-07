import React from 'react';
//importing styles from our UI library
import {makeStyles} from "@material-ui/core/styles";
// assets from our UI library that help us build the
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Route} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";

// TODO: for this to work we will create a folder called assets in src and place it here
//  download any image and name it coverImg.jpg (www.unsplash.com is a great resource)
import coverImg from '../assets/coverImg.jpg'

const HomePage = () => {

    const classes = useStyles(); // we are using the method to load our css we will declare later

    return (
        // defines a top level container (the one for the entire page)
        <div>
            {/*CssBaseline is a very useful component that allows us to establish a baseline that we build on*/}
            <CssBaseline/>

            <Grid container
                  alignContent={'center'} alignItems={'center'} // centers all content
                  className={classes.container} // applies the CSS declared above
                  direction={'column'} // aligns everything in a column, could also be row
                  style={{backgroundImage: `url(${coverImg})`}} // adds a background image
            >
                {/*now we define another container for out buttons at the very top*/}
                <Grid container direction={'row'} alignContent={'flex-end'} alignItems={'flex-end'}>
                    <Button disableRipple={true} className={classes.button}>Log In</Button>
                    {/*This is how you can route the user from any component (explanation below)*/}
                    <Route render={({history}) => (
                        <Button disableRipple={true} // disables ripple effect on the button press
                                className={classes.button} // this applies the styles we will define later
                                onClick={() => history.push('./store')}>Shop</Button>)}/>

                    <Button disableRipple={true} className={classes.button}>About</Button>
                </Grid>
                <Grid container
                      alignContent={'center'} alignItems={'center'} // centers all content
                      direction={'column'} // aligns everything in a column, could also be row
                >
                    {/* make sure to wrap container’s children with <Grid item> tag*/}
                    <Grid item alignSelf={'center'}>
                        <Typography className={classes.coverTxt}>React Bare Necessities</Typography>
                    </Grid>
                    <Grid item alignSelf={'center'}>
                        <Typography className={classes.subTitleTxt}>Bite-sized React </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage


const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh', // our container will take the full height of the window
        backgroundSize: 'cover', // stretch the image to fill the full width and height
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
    },
    coverImg: {
        height: "100vh", // the image itself will take the full height of the window
    },
    coverTxt: {
        marginTop: '20vh',
        color: 'white',
        fontFamily: 'Cinzel', // a custom font, look at the box below on how to import
        fontSize: '8vw'
    },

    subTitleTxt: {
        fontFamily: 'Knewave', // a custom font, look at the box below on how to import
        color: 'white',
        fontSize: '4vw' // this is a measurement of viewWidth
    },
    button: {
        color: 'white',
        fontSize: '1.8vw',
        fontFamily: 'Poiret One', // a custom font, look at the box below on how to import
        margin: 10
    }
}))
