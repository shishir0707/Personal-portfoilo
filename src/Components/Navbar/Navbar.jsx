import React, { useState } from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.scss';
import Bars from '../../img/bars.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    Andrew
                </div>
                <Toggle />
            </div>
            <div className='n-right'>
                {(menuOpened === false && mobile === true) ? (
                    <div className='n-list'
                        style={{
                            backgroundColor: '',
                            padding: '0.5rem',
                            borderRadius: '5px',
                        }}
                        onClick={() => setMenuOpened(true)}
                    >
                        <img src={Bars} alt="" style={{ backgroundColor: 'blue', width: '1.5rem', height: '1.5rem' }} />
                    </div>
                ) : (
                    <ul
                    className='header-menu'
                    style={{cursor: 'pointer'}}>
                        <Link spy={true} to='Navbar'
                         onClick={() => setMenuOpened(false)}
                        >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services'
                         onClick={() => setMenuOpened(false)}
                        >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience'
                         onClick={() => setMenuOpened(false)}
                        >
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio'
                         onClick={() => setMenuOpened(false)}
                        >
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials'
                         onClick={() => setMenuOpened(false)}
                        >
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                )
                }
            </div>
            {/* <button className='button n-button'>Contact</button> */}
        </div>
    )
}

export default Navbar