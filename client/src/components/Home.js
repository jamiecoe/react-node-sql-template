import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

const Home = (props) => {

  return (
    <div>
      <SignUp signIn={props.signIn} history={props.history}/>
      <Login signIn={props.signIn}/>
    </div>
  )
}

export default Home
