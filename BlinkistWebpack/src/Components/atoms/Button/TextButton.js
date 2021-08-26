import React from 'react';
import Button from '@material-ui/core/Button';


const TextButtons = (props) =>
{
  
    return (
      <div >
        <Button {...props}>
             <b>{props.name} </b>
        </Button>
      </div>
    );
  };

export default TextButtons;