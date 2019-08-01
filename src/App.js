import React from 'react';
import './App.css';
import './TextInput';
import TextInput from './TextInput';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  
  handleSearch = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name
  
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault();
  }

  render() {
    return (
      <>
        <header className='top-bar'>Weirdness Calculator</header>
        <p>Find out how weird you are by selecting the GIFs that make you
          laugh. We'll show you the least weird ones to start, but you can
          move the slider to make them weirder.
        </p>
        <p>
          When you find a GIF you like, press the <i>Like</i> button. Once
          you like 5 GIFs, we'll show you how weird you are.  
        </p>
        <TextInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} />
      </>
    );
  }
}
export default App;
