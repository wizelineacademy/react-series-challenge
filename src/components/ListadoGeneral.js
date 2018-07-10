import React from 'react';
import SearchBar from './SearchBar'
import GiphyList from './GiphyList';


const ListadoGeneral = () => (
    <React.Fragment>
        <p>En este lugar puedes ver y buscar giphies</p>
        <SearchBar/>
        <GiphyList/>
    </React.Fragment>
);

export default ListadoGeneral;