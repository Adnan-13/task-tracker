import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

Button.prototype = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
