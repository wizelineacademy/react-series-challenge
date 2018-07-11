import React from 'react';
import ListGiphy from './list-giphy';
const GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient('STKCOqnN3DKDQJRPbv5il9egmGwZqRSn');

// gifs
export default function Search(props){
  let textInput = React.createRef();

  function handleSearch(e){
    e.preventDefault();
    const valueSearch = textInput.current.value;

    client.search('gifs', {"q": valueSearch.toString()})
    .then((response) => {
      response.data.map((urlGiphy) => {
        // return(
        //   <ListGiphy 
        //     urlGiphy={urlGiphy.images.downsized.gif_url}
        //   />
        // )
        console.log(urlGiphy.images.downsized.gif_url);
      })
    })
    .catch((err) => {

    })
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