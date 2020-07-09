import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import {useHistory} from "react-router";

export default function ArtistProfileCard({artistProfile}) {
    const cls = useStyles();
    const history = useHistory()

    function routeToArtistPage(e) {
        const artistUrl = e.currentTarget.getAttribute('artist-url')
        console.log(artistUrl)
        history.push(artistUrl)
    }

    return (
        <Card className={cls.root} style={{backgroundImage: `url(${artistProfile.imageUrl})`}}>
            <CardActionArea artist-url={artistProfile.localUrl} onClick={routeToArtistPage}>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="h2" className={cls.title}>
                        {artistProfile.name} {artistProfile.lastName}
                    </Typography>
                </CardContent>
                <CardActions className={cls.buttons}>
                    <Button size="small" className={cls.button} artist-url={artistProfile.localUrl}
                            onClick={routeToArtistPage}>
                        Browse
                    </Button>
                    <Button size="small" className={cls.button}>
                        <ShareIcon/>
                    </Button>
                </CardActions>
            </CardActionArea>

        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        minWidth: 345,
        minHeight: '50vh',
        width: '60vw',
        // backgroundImage: 'url("https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
    },
    media: {
        height: '30vh',
    },
    title: {
        color: 'white'
    },
    buttons: {
        color: 'white',
        marginTop: '30vh'
    },
    button: {
        color: 'white',
    }
});
