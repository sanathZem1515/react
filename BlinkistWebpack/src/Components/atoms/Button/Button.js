import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton(props){
      return(
        <Button variant={props.variant} color={props.color} onClick={props.onClick} size={props.size} >
        {props.name} {props.endIcon}
        </Button>
    );
}

export default CustomButton;