import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import VVNLogo from './img/VVN Logo.png';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Music from './components/Music';
import Socials_Streams from './components/Socials_Streams';
import Services from './components/Services';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="background">
          <img id="VVN-BG" src={VVNLogo} alt="" />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/socials-streams" component={Socials_Streams} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
