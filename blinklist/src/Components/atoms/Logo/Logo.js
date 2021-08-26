import BlinklistSvg from './Logo.png';
import './style.css';

export default function Logo({handleClick}){
    return (
           <img  data-testid="testLogo" className='logo' src={BlinklistSvg} alt='Blinklist' onClick={handleClick}/>
    );
}