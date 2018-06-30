import React from 'react';
import { Button } from 'react-bootstrap';

export default props => {
  return (
    <Button className="py-3 button text-light text-center">
      {props.title}
    </Button>
  );
};
