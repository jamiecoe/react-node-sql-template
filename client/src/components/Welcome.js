import React from 'react';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    fetch('/authenticate', {
      credentials: 'same-origin'
    })
    .then((res) => {      
      if(res.status === 401) this.props.history.push('/');
    });

  }

  render() {
    return <h1>Welcome!</h1>;
  }

};

export default Welcome
