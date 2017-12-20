import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm(event) {
    event.preventDefault();
    const data = {};

    for(const pair of new FormData(event.target).entries()) {
      data[pair[0]] = pair[1];
    };

    fetch('/login', {
      method: 'POST',
      headers: new Headers({"Content-Type": "application/json"}),
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" id="username" name="username"/>
        <label>Password</label>
        <input type="password" id="password" name="password"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login
