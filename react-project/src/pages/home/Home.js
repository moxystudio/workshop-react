import React, { Component } from 'react';
import io from 'socket.io-client'
// import MessageBox from './message-box/MessageBox';
import AccountForm from './account-form/AccountForm';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: undefined,
    };
    this._authTry = this._authTry.bind(this);
  }

  componentDidMount() {
    this._socket = io(`https://ws-chat-server.now.sh`);
  }

  render() {
    const { authenticated, user } = this.state;

    return (
      <div className="home">
        <AccountForm authTry={ this._authTry } authenticated={ authenticated } />
        {
          /*
            <MessageBox user={ user } socket={ this._socket } />
          */
        }
      </div>
    );
  }

  _authTry(name, emoji) {
    const user = { name, emoji };

    // Send User info to Socket
    this._socket.emit('userInfo', user);
    this.setState({ user, authenticated: true });
  }
}

export default Home;
