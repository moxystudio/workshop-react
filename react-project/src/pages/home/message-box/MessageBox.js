import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './MessageBox.css';

class MessageBox extends Component {
  render() {
    const { name, emoji } = this.props;

    return (
      <div className="home-message-box">
          <div className="home-message-box-list">
            <div>MESSAGE BOX</div>
          </div>
          <div className="home-message-box-send-wrapper">
              <div className="home-message-box-send-text">
                <input className="home-message-box-send-text-input" />
              </div>
              <button className="home-message-box-send-button">
                SEND
              </button>
          </div>
      </div>
    );
  }

}

MessageBox.propTypes = {
    name: PropTypes.string,
    emoji: PropTypes.string,
};

export default MessageBox;
