/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: ______Wang Pan_______ Student ID: ______153043161________ Date: ____2018/11/02____________
*
********************************************************************************/ 

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom' 
import Overview from './OverView.js'
import Projects from './Projects.js' 
import Teams from './Teams.js'
import Employees from './Employees'
import NotFound from './NotFound';


class App extends Component {
  render() {
    let url = "https://desolate-scrubland-90745.herokuapp.com/"
    return (
      <Switch>
        <Route exact path='/' render={()=>(
          <Overview title="Overview" dataSource={url}/>
        )}/>
        <Route exact path='/projects' render={()=>(
          <Projects title="Projects" dataSource={url}/>
        )}/>
        <Route exact path='/teams' render={()=>(
          <Teams title="Teams" dataSource={url}/>
        )}/>
        <Route exact path='/employees' render={()=>(
          <Employees title="Employees" dataSource={url}/>
        )}/>
        <Route render={()=>(
          <NotFound title="NotFound" dataSource={url}/>
        )}/>
      </Switch>
    );
  }
}

export default App;