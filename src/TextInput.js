import React from 'react';
import './TextInput.css';
import Button from './Button';

const TextInput = ({ handleSubmit, handleSearch, search }) => {
  return (
    <form className="search-input">
      <label htmlFor="Search Input">
        <input className="base-input" type="text" name="search" value={search} onChange={handleSearch} placeholder="Let's get weird..." />
      </label>
      <Button handleSubmit={handleSubmit}>SEARCH</Button>
    </form>
  );
}

export default TextInput;