import React from 'react';
import './Button.css';

const Button = (props) => {
  const { buttonText, handleSubmit } = props;
  return <button className='button' onClick={handleSubmit}>{buttonText}</button>
}

export default Button;