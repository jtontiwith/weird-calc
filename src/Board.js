import React from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import Notifications from './Notifications';
import GIFBox from './GIFBox';
import Gif from './Gif';
import Button from './Button';
import { fetchGIF, likeGIF, deleteGIF, showNotification } from './Actions';
import './Board.css';
import './TextInput';


class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handleSearch = (e) => {
    const target = e.target;
    const value = target.value.trim();
    const name = target.name
  
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    const { dispatch } = this.props;
    const { search } = this.state;
    dispatch(fetchGIF(search));
  }

  handleLike = () => {
    const { dispatch } = this.props;
    const { likedGifsArray, searchResult } = this.props;
    for(let i = 0; i < likedGifsArray.length; i++) {
      if(likedGifsArray[i].fromSearch === searchResult.fromSearch) {
        return dispatch(showNotification('You only get one liked GIF per search term.'))
      }
    }
    dispatch(likeGIF())
    dispatch(showNotification(`Nice like for term ${searchResult.fromSearch}! Search again.`));
  }

  handleDelete = (e, index) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(deleteGIF(index))
  }
  
  handleRedirect = () => {
    const { dispatch, history, likedGifsArray } = this.props;
    if(likedGifsArray.length > 2) {
      history.push('/results');
    }
    const remainingGIFs = 5 - likedGifsArray.length;
    dispatch(showNotification(`You still have ${remainingGIFs} GIFs to choose.`));
  }


  render() {
    const likedGIFs = this.props.likedGifsArray.map((gif, index) => <Gif key={index} handleDelete={this.handleDelete} title={gif.title} url={gif.url} index={index} /> ) 
    return (
      <>
        <header className='top-bar'>Weirdness Calculator</header>
        <div className='row'>
          <div className='column-1'>
          <p>Find out how weird you are by selecting the GIFs that make you
            laugh. We'll show you the least weird ones to start, but you can
            move the slider to make them weirder.
          </p>
          <p>
            When you find a GIF you like, press the <i>Like</i> button. Once
            you like 5 GIFs, we'll show you how weird you are.  
          </p>
          <Notifications />
          <TextInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} />
          <GIFBox handleLike={this.handleLike} />
          </div>
          <div className='column-2'>
            <h4>YOUR LIKED GIFS</h4>
            {likedGIFs}
            <div>
            { likedGIFs.length > 0 ? 
              <>
              <Button handleClick={this.handleRedirect}>CALCULATE MY WEIRDNESS SCORE</Button> 
              <div>You must <i>Like</i> { 5 - likedGIFs.length } more GIFs to calculate your score.</div>
              </>
            : null }
            </div> 
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    likedGifsArray: state.likedGIFs,
    searchResult: state.searchResult
  }
}

export default connect(mapStateToProps)(Board);