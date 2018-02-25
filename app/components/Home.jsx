import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <NavLink to="/cutepuppies"> 
          <button> <h1> Find Cute Puppies Here </h1> </button> 
        </NavLink>
      </div>
    )
  }
}