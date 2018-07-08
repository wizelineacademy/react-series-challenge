import React from 'react';

const SearchGif = () => {

    const onKeyUpSearch = (e) => {
        console.log('KEY_UP', e.target.value)
    };

    return (
        <div>
            <label htmlFor="searchGif">Search Gif</label>
            <input type="text" id="searchGif" onKeyUp={onKeyUpSearch}/>
        </div>
    );
};

export default SearchGif;