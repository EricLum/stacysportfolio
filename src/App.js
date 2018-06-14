import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import stacyslogo from './Logo.png';
import cryospace from './Cryospace.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <div className='imageholder'>
            <img src={stacyslogo} height='80px'/>
          </div>
          <div></div>
          <div className="nav">
            <ul>
              <li>Projects</li>
              <li>UX Process</li>
              <li>About Stacy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className='center vertical-center grey-background banner-height'>
          <p className='large-font'> Projects </p>
        </div>

        <div className='projects-display center'>
          <div><img className='width-75' src={cryospace} /></div>
          <div>
            <label>Cryospace</label>
            <p>Role: UX Designer & Content Strategist
            The Project: Design a website for a facility that uses advanced technology to promote speedy recovery from athletic injuries or post-surgeries.</p>
            </div>
        </div>
        </div>

    );
  }
}

export default App;
