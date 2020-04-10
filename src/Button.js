import React, { useState } from 'react';

// using hooks:

const Button = () => {
  const [buttonText, setButtonText] = useState('Click me here');

  const handleClick = () => {
    return setButtonText('Thanks, you clicked me!');
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
