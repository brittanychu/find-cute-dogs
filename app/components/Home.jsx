import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  constructor(){
    super();
    
  }


  render() {
    return (
      <div id="container">
        <NavLink to="/cutepuppies"> 
          <button> <h1> Find Cute Puppies Here </h1> </button> 
        </NavLink>
      </div>
    )
  }
}