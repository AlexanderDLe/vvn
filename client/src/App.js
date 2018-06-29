import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="background">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
