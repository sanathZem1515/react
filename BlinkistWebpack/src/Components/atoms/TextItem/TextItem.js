import { Typography } from '@material-ui/core';
import React from 'react';


const TextItems = (props) =>
{
    return(
        <Typography variant={props.variant} >{props.name}</Typography>
    )
}

export default TextItems;