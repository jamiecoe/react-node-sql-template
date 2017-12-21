import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';


class App extends Component {

  constructor(props) {
    super(props);

    fetch('/authenticate')
    .then((res) => {
      console.log(res);
    })
    this.state = { loggedIn: false };
  }

  signIn() {
    this.setState({
      loggedIn: true
    })
  }

  signOut() {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    console.log(this.state.loggedIn);
    return(
      <Switch>
        <Route
          exact path='/'
          render={(props) => (
            <Home {...props} signIn={this.signIn.bind(this)} />
          )}/>
        <Route
          path='/welcome'
          render={(props) => (
            this.state.loggedIn ? (
              <Welcome {...props} signOut={this.signOut.bind(this)}/>
            ) :
            (
              <Redirect to="/"/>
            )
          )}/>
      </Switch>
    );
  }
}

export default App;
