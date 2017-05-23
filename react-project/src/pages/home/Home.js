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
      socket: undefined,
    };
    this._authTry = this._authTry.bind(this);
  }

  componentDidMount() {
    this.setState({ socket: io(`https://ws-chat-server.now.sh`) });
  }

  render() {
    const { authenticated, user, socket } = this.state;

    return (
      <div className="home">
        { socket ? <AccountForm authTry={ this._authTry } authenticated={ authenticated } /> : 'connecting...' }
        { /* socket && user ? <MessageBox user={ user } socket={ socket } /> : null */ }
      </div>
    );
  }

  _authTry(name, emoji) {
    const user = { name, emoji: emoji.unicode };

    if (!this.state.socket) {
        return;
    }

    // Send User info to Socket
    this.state.socket.emit('userInfo', user);

    this.setState({ user, authenticated: true });
  }
}

export default Home;
