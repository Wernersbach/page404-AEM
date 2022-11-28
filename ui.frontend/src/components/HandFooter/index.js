import React from 'react';
import './style.css';

const HandFooter = ({text1, text2}) => {
    return(
        <div className='hand--footer'>
            Created by <a href={text2 ? text2 : '#'} target={'_blank'} className={'footer--username'}>@{text1 ? text1 : 'undefined'}</a>
        </div>
    )
}

export default HandFooter;