import React from  'react';
import './style.css';

const HandMainTitle = ({text}) => {
    return(
        <div className='hand-main-title'>
            {text ? text : 'I have bad news for you'}
        </div>
    )
}

export default HandMainTitle;