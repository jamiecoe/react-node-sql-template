import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div>
      <Link to="/welcome">Welcome page</Link>
      <SignUp history={props.history}/>
      <Login />
    </div>
  )
}

export default Home
