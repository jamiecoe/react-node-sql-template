import React from 'react';

const Login = () => (

  <form>
    <h2>Login</h2>
    <label for="username">Username</label>
    <input type="text" id="username" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <input type="submit" value="Submit" />
  </form>

)

export default Login
