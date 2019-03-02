import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Panels from './components/panels/panels';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Panels/>
        <Footer/>
      </div>
    );
  }
}

export default App;
