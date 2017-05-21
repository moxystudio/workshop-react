import React, { Component } from 'react';
import RegisterForm from './register-form/RegisterForm';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }
  render() {
    return (
      <div className="home">
        <RegisterForm />
      </div>
    );
  }
}

export default Home;
