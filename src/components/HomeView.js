/**
 * HomeView Component
 */

import React from 'react';

//Import Components
import SearchBar from './home/SearchBar';

const HomeView = () => {
    return (
        <section className="HomeView">
            <SearchBar />
        </section>
    );
}

export default HomeView;