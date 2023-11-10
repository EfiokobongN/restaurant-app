import React from 'react';

const MyButton = () => {
  const buttonText = 'Click me!';

  return (
    <button onClick={() => alert('Button clicked')}>
      {buttonText}
    </button>
  );
};

export default MyButton;
