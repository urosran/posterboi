import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import {Link} from "react-router-dom";

const HomePage = () => {
    const [showBuyBtn, setShowBuyBtn ] = useState(false)
    const classes = useStyles(); // we are using the method to load our css we will declare later
    // TODO: add the resizable fonts

    useEffect(()=>{
        setTimeout(()=>{
            setShowBuyBtn(true)
        }, 2000)
    })


    return (
        // defines a top level container (the one for the entire page)
        <div className={classes.top}>
            {/*CssBaseline is a very useful component that allows us to establish a baseline that we build on*/}
            <CssBaseline/>

            <Grid container
                  alignContent={'center'} alignItems={'center'} // centers all content
                  direction={'column'} // aligns everything in a column, could also be row
                // adds a background image
            >
                <Grid container
                      alignContent={'center'} alignItems={'center'} // centers all content
                      direction={'column'} // aligns everything in a column, could also be row
                >
                    {/* make sure to wrap container’s children with <Grid item> tag*/}
                    <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>

                        <Grid className={classes.container} // applies the CSS declared above
                              item >
                            <Typography  variant={"h1"} className={classes.coverTxt}>You have a colorful personality</Typography>
                        </Grid>
                    </Slide>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>

                        <Grid className={classes.container} // applies the CSS declared above
                              item >
                            <Typography variant={"h1"} className={classes.subTitleTxt}>so should your walls! </Typography>
                        </Grid>
                    </Slide>

                </Grid>
            </Grid>
            <Grid container alignItems={"center"} direction={"column"}>

                <Grid item >
                    <Grow direction="up" in={showBuyBtn} timeout={1000} mountOnEnter unmountOnExit>
                        <Link to={'/wall'}>
                        <Button className={classes.button} color={'secondary'} variant={"contained"}>
                            click here for framed wall-art </Button>
                        </Link>
                    </Grow>
                </Grid>

            </Grid>
        </div>
    )
}

export default HomePage


const useStyles = makeStyles(theme => ({
    top: {
        paddingTop: '5vh',
        height: '100vh', // our container will take the full height of the window
        backgroundSize: 'cover', // stretch the image to fill the full width and height
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
        backgroundColor: 'black',
        opacity: 10,
        overflow: "hidden"
    },
    container: {
        verticalAlign: 'center',
        marginTop: 60,
        minWidth: '100%',
        minHeight: 100,
        textAlign: "center",
        backgroundColor: 'rgba(19, 20, 20, 0.7)',
    },
    coverImg: {
        height: "100vh", // the image itself will take the full height of the window
    },
    coverTxt: {
        color: 'white',
        fontFamily: 'Knewave', // a custom font, look at the box below on how to import
        // fontSize: '4em',
        minWidth: 0,
    },

    subTitleTxt: {
        fontFamily: 'Knewave', // a custom font, look at the box below on how to import
        color: 'white',
        // fontSize: '3em',
    },
    button: {
        color: 'white',
        fontSize: '1.2em',
        fontFamily: 'Raleway', // a custom font, look at the box below on how to import
        marginTop: "10vh",
        backgroundColor: 'black',
        animation: 'shake 10s',
        borderStyle: 'double',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 0
    }
}))
