import React from 'react';
import './style.css';

const HandButton = ({text}) => {
    return(
        <div className=''>
            <a href="#" class="hand--button">{text ? text : 'back to homepage'}</a>
        </div>
    )
}

export default HandButton;