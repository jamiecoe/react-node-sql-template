import React from 'react';


class SignUp extends React.Component {
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

    fetch('/signup', {
      method: 'POST',
      headers: new Headers({"Content-Type": "application/json"}),
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
    .then((res) => {
      if(res.status === 200) {
        this.props.signIn();
        this.props.history.push('/welcome');
      }
    })

  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <h2>Sign Up</h2>
        <label>Name</label>
        <input type="text" id="name" name="name"/>
        <label>Username</label>
        <input type="text" id="username" name="username"/>
        <label>Password</label>
        <input type="password" id="password" name="password"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default SignUp
