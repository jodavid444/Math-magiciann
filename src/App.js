import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Quote from './components/Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/math-magicians/"
            element={(<Home />)}
          />
          <Route
            path="/math-magicians/calculator"
            element={(<Calculator />)}
          />
          <Route
            path="/math-magicians/quote"
            element={(<Quote />)}
          />
        </Routes>
      </div>
    );
  }

  
}
