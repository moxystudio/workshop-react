import React, { Component } from 'react';
import Picker from 'react-emojipicker'
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      emoji: undefined,
      selectEmoji: false,
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this._handleEmojiChoose = this._handleEmojiChoose.bind(this);
    this._handleEmojiChange = this._handleEmojiChange.bind(this);
  }

  render() {
    const { username, emoji, selectEmoji } = this.state;
    return (
      <form className="home-register"
        onSubmit={ this._handleSubmit }>
        <div className="home-register-input">
          <div className="home-register-input-cel">
            <div className="home-register-input-label">name: </div>
            <input type="text" className="home-register-input-value"
              value={ username } onChange={ this._handleUsernameChange } />
          </div>
          <div className="home-register-input-cel">
            <div className="home-register-input-emoji-label">emoji: </div>
            <div className="home-register-input-emoji-choose">
              <button className="home-register-input-emoji-choose-cta"
                onClick={ this._handleEmojiChoose }>
                pick
              </button>
              <Picker modal visible={ selectEmoji }
                onEmojiSelected={ this._handleEmojiChange } />
            </div>
            <div className="home-register-input-emoji-value">
              {
                emoji ?
                  emoji.unicode
                :
                  null
              }
            </div>
          </div>
        </div>

        <input className="home-register-submit" type="submit" value="Get in" />
      </form>
    );
  }

  _handleSubmit(event) {
    console.log('submit', event);
  }

  _handleUsernameChange(event) {
    console.log('change', event);
  }

  _handleEmojiChoose(e) {
    this.setState({ selectEmoji: true });
    e.preventDefault();
  }

  _handleEmojiChange(data) {
    console.log(data);
    this.setState({ selectEmoji: false, emoji: data });
  }
}

export default RegisterForm;
