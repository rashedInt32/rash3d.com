/**
 * Banner component
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  introText: PropTypes.string
}

const Banner = ({name, introText}) => {
  return (
    <div className="banner">
      <h1>My name is {name}</h1>
      <p>{introText}</p>

      <ul class="d-flex pt-50">
        <li><a href="/protfolio">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

Banner.propTypes = propTypes;

export default Banner;
