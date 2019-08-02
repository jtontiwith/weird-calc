import React from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import GIFBox from './GIFBox';
import { fetchGIF } from './Actions';
import './App.css';
import './TextInput';

class App extends React.Component {
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
    console.log('does this run?')
    e.preventDefault();
    const { dispatch } = this.props;
    const { search } = this.state;
    dispatch(fetchGIF(search));
  }

  render() {
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
          <TextInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} />
          <GIFBox />
          </div>
          <div className='column-2'>
            column 2 here
          </div>
        </div>
      </>
    );
  }
}

export default connect()(App);
