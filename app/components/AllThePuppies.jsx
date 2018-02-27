import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Instafeed from 'react-instafeed';
import {accessToken, clientId} from '../../secrets';

export default class Home extends Component {
  constructor(){
    super();
  }

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id="puppies">
        <title> <h1> Here are some puppies </h1> </title>
        <div id={instafeedTarget}>
          <Instafeed
            limit='5'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            tagName='puppies'
            userId='userIdInstagramApiString'
            clientId={`${clientId}`}
            accessToken={`${accessToken}`}
          />
        </div>
      </div>
    )
  }
}