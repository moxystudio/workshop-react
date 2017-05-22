import React, { Component } from 'react';
// import MessageBox from './message-box/MessageBox';
import AccountForm from './account-form/AccountForm';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      emoji: undefined,
      name: undefined,
      socket: undefined,
    };
    this._authSuccess = this._authSuccess.bind(this);
  }

  render() {
    const { name, emoji, socket } = this.props;

    return (
      <div className="home">
        <AccountForm authSuccess={ this._authSuccess } />
        {
            /*
              <MessageBox name={ name } emoji={ emoji } socket={ socket } />
             */
        }
      </div>
    );
  }

  _authSuccess(name, emoji) {
    this.setState({ name, emoji, authenticated: true });
  }
}

export default Home;
