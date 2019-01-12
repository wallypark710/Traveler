import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

import Navigation from "./components/Navigation";
import Youtube from "./components/Youtube";
import Traveler from "./components/Traveler";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/youtube" component={Youtube} />
            <Route path="/traveler" component={Traveler} />        
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;