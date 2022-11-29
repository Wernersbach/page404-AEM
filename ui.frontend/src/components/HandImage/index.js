import React from 'react';
import './style.css';

const HandImage = ({image = {}}) => {
  return(
      <img className='main--image' src={image.src} alt="imagem" aria-hidden="true"/>
  )
}

export default HandImage;