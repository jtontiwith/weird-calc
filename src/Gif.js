import React from 'react';
import './Gif.css'

const Gif = ({ title, url, handleDelete, index }) => {
  if(handleDelete) {
    return (
      <>
      <figcaption className='gif-title'>{title}</figcaption>
      <figure className="img-container">
        <img src={url} alt={title} />
        <a className='close-link' onClick={(e) => handleDelete(e, index)} href="#">x</a>
      </figure>
      </>
    )
  }
  return (
    <figure>
      <figcaption className='gif-title'>{title}</figcaption>
      <img src={url} alt={title} />
    </figure>
  )
}

export default Gif;