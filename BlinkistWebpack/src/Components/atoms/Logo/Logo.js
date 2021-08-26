import React from 'react';
import BlinklistSvg from './Logo.png';
import './style.css';

export default function Logo({handleClick}){
    return (
           <img className='logo' src={BlinklistSvg} alt='Blinklist' onClick={handleClick}/>
    );
}