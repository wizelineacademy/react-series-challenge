/**
 * HomeView Component
 */

import React from 'react';

//Import Components
import SearchBar from './home/SearchBar';
import DisplayGifs from './home/DisplayGifs';

const HomeView = () => {
    return (
        <section className="HomeView">
            <SearchBar />
            <DisplayGifs />
        </section>
    );
}

export default HomeView;