import React from  'react';
import './style.css';

const HandHeader = ({text}) => {
    return(
        <div className='hand--header'>
            {text ? text : '404 NOT FOUND'}
        </div>
    )
}

export default HandHeader;