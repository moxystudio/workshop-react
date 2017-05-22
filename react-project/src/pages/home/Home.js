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
      emoji: undefined,
      name: undefined,
    };
    this._authTry = this._authTry.bind(this);
  }

  componentDidMount() {
    this._socket = io(`https://workshop-chat-server-zzbrwyrtcc.now.sh`);
    this._socket.on('connection', () => {
      console.log('connected');
    });
  }

  render() {
    const { name, emoji, socket } = this.props;

    return (
      <div className="home">
        <AccountForm authTry={ this._authTry } />
        {
            /*
              <MessageBox name={ name } emoji={ emoji } socket={ socket } />
             */
        }
      </div>
    );
  }

  _authTry(name, emoji) {
    const user = { name, emoji };

    // Send User info to Socket
    this._socket.emit('userInfo', user);

    this._socket.on('userConnected', user => {
    	console.log(`# user ${user.name} connected`);
      this.setState({ authenticated: true });
    });

    this.setState({ name, emoji });

  }
}

export default Home;
