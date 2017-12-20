import React from 'react';

const SignUp = () => (

    <form>
      <h2>Sign Up</h2>
      <label for="name">Name</label>
      <input type="text" id="name" />
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <input type="submit" value="Submit" />
    </form>

)

export default SignUp
