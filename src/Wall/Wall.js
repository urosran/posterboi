import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import ArtistProfileCard from "./ArtistProfileCard";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withMobileDialog} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        marginBottom: '10vh'
    },
    appBar: {
        minHeight: '10vh',
        textAlign: 'center'
    }
});


const Wall = () => {
    const [showBuyBtn, setShowBuyBtn] = useState(false)
    const cls = useStyles();
    const artists = [
        {
            name: "Jay",
            lastName: "Z",
            imageUrl: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            localUrl: '/jayz'
        },
        {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            localUrl: '/jayz'
        },

        {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "http://source.unsplash.com/random",
            localUrl: '/jayz'
        },
        {name: "uros", lastName: "randelovic", imageUrl: "http://source.unsplash.com/random"}, {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "http://source.unsplash.com/random"
        },
        {name: "uros", lastName: "randelovic", imageUrl: "http://source.unsplash.com/random"}, {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "http://source.unsplash.com/random"
        },
        {name: "uros", lastName: "randelovic", imageUrl: "http://source.unsplash.com/random"}, {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "http://source.unsplash.com/random"
        },
        {name: "uros", lastName: "randelovic", imageUrl: "http://source.unsplash.com/random"}, {
            name: "uros",
            lastName: "randelovic",
            imageUrl: "http://source.unsplash.com/random"
        },
        {name: "uros", lastName: "randelovic", imageUrl: "http://source.unsplash.com/random"},
    ]

    return (
        <div>
            <CssBaseline/>
            <Fade in={true} timeout={1000}>
                <AppBar position={"sticky"} className={cls.appBar}>
                    <Typography variant={'h2'}>Your character, in lyrics</Typography>
                </AppBar>
            </Fade>
            <Grid container direction={'column'} alignItems={'center'} alignContent={'center'}>
                <Grid item>
                    <List>
                        {artists.map((artistProfile) => {
                            return (
                                <Fade in={true} timeout={2000}>
                                    <ListItem key={artistProfile.name + artistProfile.lastName + Date.now()}>
                                        <ArtistProfileCard artistProfile={artistProfile}/>
                                    </ListItem>
                                </Fade>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default Wall;