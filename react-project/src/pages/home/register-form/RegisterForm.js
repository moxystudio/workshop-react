import React, { Component } from 'react';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      emoji: undefined,
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this._handleEmojiChange = this._handleEmojiChange.bind(this);
  }

  render() {
    return (
      <form className="home-register"
        onSubmit={ this._handleSubmit }>
        <div className="home-register-inputs">

          <div className="home-register-input">
            <div className="home-register-input-label">name: </div>
            <input type="text" className="home-register-input-value"
              value={ this.state.username } onChange={ this._handleUsernameChange } />
          </div>

          <div className="home-register-input">
            <div className="home-register-input-label">emoji: </div>
            <select className="home-register-input-value"
              value={ this.state.value } onChange={ this._handleEmojiChange }>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
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

  _handleEmojiChange(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
}

export default RegisterForm;
