import React from 'react';
import './TextInput.css';
import Button from './Button';

const TextInput = (props) => {
  const { handleSubmit, handleSearch, search } = props;
  return (
    <form className="search-input">
      <label htmlFor="Search Input">
        <input className="base-input" type="text" name="search" value={search} onChange={handleSearch} placeholder="Let's get weird..." />
      </label>
      <Button buttonText='SEARCH' handleSubmit={handleSubmit} />
    </form>
  );
}

export default TextInput;