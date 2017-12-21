import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';

class App extends Component {

  constructor(props) {
    super(props);    

  }

  render() {
    return(
      <Switch>
        <Route
          exact path='/'
          render={(props) => (
            <Home {...props} />
          )}/>
        <Route
          path='/welcome'
          render={(props) => {
            return (
              <Welcome {...props} />
          )}}/>
      </Switch>
    );
  }
}

export default App;
