import React, { useState } from 'react';

// using hooks:

export default function Button() {
  const [buttonText, setButtonText] = useState('Click me here');

  const handleClick = () => {
    return setButtonText('Thanks, you clicked me!');
  };

  return <button onClick={handleClick}>{buttonText}</button>;
}
