import React from 'react'
import { connect } from 'react-redux';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import RangeInput from './RangeInput';
import Gif from './Gif';

const GIFBox = ({ loading, title, url  }) => {
  if(url) {
    return (
      <>
        <h1>Your Result</h1>
        <Gif title={title} url={url} />
        <Button><FontAwesomeIcon icon={faThumbsUp} /></Button>
        <RangeInput />   
      </>
    )
  }
  
  if(loading) {
    return <div>loading here...</div>
  }

  return (
    <>
    <div>Search above to see some results...weirdo.</div>
    </>
    )
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
