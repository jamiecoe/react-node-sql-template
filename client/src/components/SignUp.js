import React from 'react';

const SignUp = () => (

    <form action="/signup" method="POST">
      <h2>Sign Up</h2>
      <label>Name</label>
      <input type="text" id="name" />
      <label>Username</label>
      <input type="text" id="username" />
      <label>Password</label>
      <input type="password" id="password" />
      <input type="submit" value="Submit" />
    </form>

)

export default SignUp
