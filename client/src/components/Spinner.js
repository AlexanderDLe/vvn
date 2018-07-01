import React from 'react';
import spinner from '../img/Blue loader.gif';

export default () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
  );
};
