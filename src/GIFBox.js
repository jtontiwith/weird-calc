import React from 'react'
import { connect } from 'react-redux';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import RangeInput from './RangeInput';
import Gif from './Gif';
import './GIFBox.css'


const GIFBox = ({ loading, error, title, url, handleLike, likedGifsArray  }) => {
  if(url) {
    return (
      <>
        <h4>YOUR RESULT</h4>
        { error ? `You've got an error: ${error}` : null }
        <section className='gif-box'>
          <Gif title={title} url={url} />
          <div className='button-wrap'><Button handleClick={handleLike}><FontAwesomeIcon icon={faThumbsUp} /></Button></div>
          <RangeInput />
        </section>   
      </>
    )
  }
  
  if(loading) {
    return <div>loading here...</div>
  }

  return null
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    title: state.searchResult.title,
    url: state.searchResult.url,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(GIFBox)
