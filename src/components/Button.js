import React from 'react';
import { Button } from 'reactstrap';

export default props => {
  return (
    <Button className="contact-button py-3 button text-light text-center">
      {props.title}
    </Button>
  );
};
