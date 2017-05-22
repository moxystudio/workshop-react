import React, { Component } from 'react';
import SecondaryHeader from './secondary-header/SecondaryHeader';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoClicksCount: 0,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const { logoClicksCount } = this.state;

    return (
      <div className="header">
        <img src={ logo } className="header-logo"
          alt="logo" onClick={ this._handleClick } />
        {
          logoClicksCount === 0 ?
            <h2>Welcome to this Workshop #madeWithMoxy</h2> :
            <SecondaryHeader headerId={ logoClicksCount } />
        }
      </div>
    );
  }

  _handleClick() {
    const { logoClicksCount } = this.state;

    this.setState({ logoClicksCount: logoClicksCount + 1 });
  }
}

export default Header;
