import React, { useState } from 'react';

export default function SearchBar({setSearchResult, fetchedData }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const searchTerm = inputValue.trim().toLowerCase(); // Convert to lowercase and trim whitespace
    if (searchTerm === '') {
      setSearchResult([]);
    }
    const filteredList = fetchedData.filter(song => song.name.toLowerCase().includes(searchTerm));
    console.log(filteredList);
    setSearchResult(filteredList);
  };

  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder='Search for song title'
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
