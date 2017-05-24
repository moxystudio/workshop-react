import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './MessageBox.css';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: '',
      messages: [],
    };
    this._handleMessageContentChange = this._handleMessageContentChange.bind(this);
    this._handleSendMessage = this._handleSendMessage.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on('message', data => {
      console.log(`${data.user.emoji}  ${data.user.name}: ${data.text}`);
      const { messages } = this.state;

      this.setState({ messages: [ ...messages, data.text] });
    });
  }

  render() {
    const { name, emoji } = this.props;
    const { messages } = this.state;

    return (
      <div className="home-message-box">
          <div className="home-message-box-list">
          {
            messages.map((message) => (
              <div>{ message }</div>
            ))
          }
          </div>
          <div className="home-message-box-send-wrapper">
              <div className="home-message-box-send-text">
                <input ref={ (input) => { this._inputEl = input; } }
                  className="home-message-box-send-text-input"
                  onChange={ this._handleMessageContentChange }/>
              </div>
              <button className="home-message-box-send-button"
                onClick={ this._handleSendMessage }>
                SEND
              </button>
          </div>
      </div>
    );
  }

  _handleSendMessage() {
    const { user, socket } = this.props;
    const { messageContent } = this.state;

    socket.emit('message', {
      text: messageContent,
      timestamp: new Date().toISOString()
    });

    const { messages } = this.state;

    this._inputEl.value = '';
    this.setState({ messages: [ ...messages, messageContent], messageContent: '' });
  }

  _handleMessageContentChange(event) {
    this.setState({ messageContent: event.target.value });
  }

}

MessageBox.propTypes = {
    socket: PropTypes.object,
    user: PropTypes.object,
};

export default MessageBox;
