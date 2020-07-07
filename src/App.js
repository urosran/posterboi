import React from 'react';
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";
// we will create the component in a bit - it will show an error for the time being
import HomePage from "./Landing Pages/HomePage";

function App() {
  return (
      <HashRouter basename={'/'}>
        <div className="App">
          <Route exact path={"/"} component={HomePage}/>
        </div>
      </HashRouter>
  );
}

export default App;
