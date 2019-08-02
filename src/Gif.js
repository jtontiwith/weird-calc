import React from 'react';

const Gif = ({ title, url }) => {
  return (
  <>
    <div>{title}</div>
    <img src={url} />
  </>
  )
}

export default Gif;