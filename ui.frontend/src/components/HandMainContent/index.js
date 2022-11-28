import React from  'react';
import './style.css';

const HandMainContent = ({text}) => {
    return(
        <div className='hand-main-content'>
            {text ? text : 'The page you are looking for might be removed or is temporarily unavailable'}
        </div>
    )
}

export default HandMainContent;