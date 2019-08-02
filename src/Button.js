import React from 'react';
import './Button.css';

const Button = ({ handleSubmit, children }) => {
  return <button className='button' onClick={handleSubmit}>{children}</button>
}

export default Button;