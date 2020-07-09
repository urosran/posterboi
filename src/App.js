import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// we will create the component in a bit - it will show an error for the time being
import HomePage from "./Landing Pages/HomePage";
import Wall from "./Wall/Wall";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import ArtistPage from "./Artists/ArtistPage";

function App() {
    return (
        <Router>
            <ThemeProvider theme={responsiveFontSizes(theme)}>
                <div className="App">
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/wall"} component={Wall}/>
                    <Route exact path={"/jayz"} component={ArtistPage}/>
                    {/*<Route path="/surveys/:surveyUid" component={Survey}/>*/}

                </div>
            </ThemeProvider>
        </Router>
    );
}

const theme = createMuiTheme({
    typography: {
        fontSize: 15,
        fontFamily: 'Comfortaa',
        h1: {
            fontSize: '5em',
            fontFamily: 'Knewave',
        },
        h2: {
            fontSize: '3em',
            fontFamily: 'Knewave',
        },
        h3: {
            fontSize: '1.5em',
            fontFamily: 'Knewave',

        },
        h4: {
            fontSize: '1em',
            fontFamily: 'Knewave',
        },
        h5: {
            fontSize: '0.5em',
            fontFamily: 'Knewave',
        },
        button: {
            fontFamily: 'Raleway'
        }
    },
    palette: {
        "common": {
            "black": "rgba(0, 0, 0, 1)",
            "white": "rgba(254, 249, 249, 1)"
        },
        "background": {
            "paper": "#fff",
            "default": "#fafafa"
        },
        "primary": {
            "light": "rgba(81, 84, 98, 1)",
            "main": "rgba(5, 6, 11, 1)",
            "dark": "#303f9f",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "#ff4081",
            "main": "rgba(32, 40, 206, 0.84)",
            "dark": "#c51162",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
});

export default App;

