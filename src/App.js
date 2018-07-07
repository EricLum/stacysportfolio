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


        <div className='bold center'>
          <span>Hi, I am a </span><span className='orange'>Product Designer</span><span>, creating amazing experiences through research centered design and creative narration.</span>
        </div>

        <h2>What I do</h2>
        <div>
          I approach problems from the needs of the user and turn complex processes into simple and relatable solutions.
          <br />
          <br />
          My goal is to create products that aer effective with thoughtful visual design intertwined with functionality.
        </div>

        <h2>My Projects</h2>
        {/*four grid  */}
        <div className='center'>
          Work with me!
          <br/>
          Contact me at <span className='orange'>stacyyipdesign@gmail.com</span>
        </div>



        <hr></hr>
        </div>

    );
  }
}

export default App;
