import React, { Component } from 'react'
import Avatar from "../Avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";


export default class about extends Component {
  render() {
    return (
      <>
        <Avatar page ="about"/>
        <AboutMenu/>
      </>
    )
  }
}
