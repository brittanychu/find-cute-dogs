import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   Dimensions,
//   FlatList,
// } from 'react-native';
import { NavLink } from 'react-router-dom';

const accessToken = "1328896.fc743b9.34ea0558e80a4696839efae1a9d19038";

export default class Home extends Component {
  render() {
    return (
      <div id="puppies">
        <title> <h1> Here are some puppies </h1> </title>
        <puppies> </puppies>
      </div>
    )
  }
}