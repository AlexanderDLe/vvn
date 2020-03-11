import React from 'react';
import { Button } from 'reactstrap';

export default props => {
    return (
        <Button className="contact-button px-5 py-2 button text-light text-center">
            {props.title}
        </Button>
    );
};
