import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SecondaryHeader.css';

const headers = ['Hello!', 'this works', 'bah, I just want to code!', 'yeaaah!'];

class SecondaryHeader extends Component {

  render() {
    const { headerId } = this.props;
    const currentHeader = headerId ?
      headers[headerId % headers.length] : headers[0];

    return (
      <h2 className="secondary-header">
        { currentHeader }
      </h2>
    );
  }
}

SecondaryHeader.propTypes = {
    headerId: PropTypes.number,
};

export default SecondaryHeader;
