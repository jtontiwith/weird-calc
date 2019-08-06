import React from 'react';
import { connect } from 'react-redux';
import Gif from './Gif';
import { faGrimace } from '@fortawesome/free-solid-svg-icons';

const Results = ({ likedGifsArray }) => {
  const likedGIFs = likedGifsArray.map((gif, index) => <Gif key={index} title={gif.title} url={gif.url} index={index} /> ) 
  let cumulativeWeirdness = 0;
  
  if(likedGifsArray.length > 0) {
    for(let i = 0; i < likedGifsArray.length; i++) {
      cumulativeWeirdness += parseInt(likedGifsArray[i].range, 10)
    }
    
  }
  console.log(cumulativeWeirdness)
  return (
    <>  
      <div>{likedGIFs}</div>
      <div>You scored an {cumulativeWeirdness / likedGifsArray.length} out of 10 on the weirdness scale.</div>
    </>
  ) 
}

const mapStateToProps = (state) => {
  return {
    likedGifsArray: state.likedGIFs
  }
}

export default connect(mapStateToProps)(Results);