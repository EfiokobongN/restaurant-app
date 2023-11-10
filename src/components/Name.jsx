import React from 'react';
import Greeting from './Greeting';

const Name = () => {
  return (
    <div>
      <Greeting name="Joy" message="Welcome to React!" />
      <Greeting name="Glory" message="Have a great day!" />
    </div>
  );
};

export default Name;
