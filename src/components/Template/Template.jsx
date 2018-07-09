import React from 'react';
import PropTypes from 'prop-types';

const Template = ({ children }) => (
  <div>
    {children}
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
