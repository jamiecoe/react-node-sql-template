import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';


class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/welcome' component={Welcome}/>
      </Switch>
    );
  }
}

export default App;
