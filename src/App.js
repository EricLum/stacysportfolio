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
          {/*navbar */}
          <div className="nav">
            <ul>
              <li>Projects</li>
              <li>UX Process</li>
              <li>About Stacy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/*project banner */}
        <div className='center vertical-center grey-background banner-height'>
          <p className='large-font'> Projects </p>
        </div>

        {/*projet displays  */}
        <div className='projects-display center'>
          <div> </div>
          <div><img className='width-75' src={cryospace} /></div>
          <div className='center'>
            <h3>Cryospace</h3>
            <p className='bold'>Role: UX Designer & Content Strategist</p>
            <p>The Project: Design a website for a facility that uses advanced technology to promote speedy recovery from athletic injuries or post-surgeries.</p>
            </div>
        </div>
        <div></div>
        <hr></hr>
        </div>

    );
  }
}

export default App;
