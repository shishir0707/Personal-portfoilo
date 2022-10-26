import React from 'react'
import './Toggle.scss';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const hanldleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className='toggle' onClick={hanldleClick}>
            <Moon />
            <Sun />

            <div className='t-button'
                style={darkMode ? { left: '2px' } : { right: '2px' }}
            >

            </div>
        </div>
    )
}

export default Toggle