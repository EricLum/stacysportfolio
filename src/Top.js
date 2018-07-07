import React from 'react'
import stacyslogo from './Logo.png';
// import {Navbar, NavItem} from 'react-materialize'
export default class Top extends React.Component {

  render(){
    return(
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
    )
  }
}
