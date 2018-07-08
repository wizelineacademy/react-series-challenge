import React from 'react';

export default function Search(props){
  let textInput = React.createRef();

  function handleSearch(e){
    e.preventDefault();
    const valueSearch = textInput.current.value;
    console.log(valueSearch);
  }
  return(
    <form onSubmit={handleSearch}>
      <input 
        className="input-search"
        type="text" 
        placeholder="Search Giphy"
        ref={textInput}
        />
    </form>
  )
}