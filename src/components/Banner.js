/**
 * Banner component
 */

import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

const propTypes = {
  name: PropTypes.string,
  introText: PropTypes.string
}

const Banner = ({name, introText}) => {
  return (
    <div className="banner">
      <h1>My name is {name}</h1>
      <p>{introText}</p>
      <Nav />
    </div>
  );
}

Banner.propTypes = propTypes;

export default Banner;
