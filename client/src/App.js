import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './components/Navbar';
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
      <Router>
        <div className="App">
          <Navbar />
          <div className="background">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/socials-streams" component={Socials_Streams} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
