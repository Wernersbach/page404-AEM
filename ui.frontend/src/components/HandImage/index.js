import React from 'react';
import './style.css';

const HandImage = ({image = {}}) => {
  return(
    <div className='hand-container-image'>
      <img className='main--image' src={image.src} alt="imagem" aria-hidden="true"/>
    </div>
  )
}

export default HandImage;