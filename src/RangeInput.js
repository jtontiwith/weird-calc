import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchGIF } from './Actions';
import './RangeInput.css';

const RangeInput = ({ currentSearch, dispatch }) => {
  const [range, setRange] = useState(0)

  const handleChange = (e) => { 
    setRange(e.target.value)
    dispatch(fetchGIF(currentSearch, range))
  }

  return (
    <>
      <form>
        <input className='range-input' onChange={handleChange} type="range" name="points" min="0" max="10" value={range} />
      </form>
      <div className='weirdness-value'>Weirdness: {range}</div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentSearch: state.currentSearch
}) 

export default connect(mapStateToProps)(RangeInput);