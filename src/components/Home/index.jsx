import React from 'react'
import {HomeWrapper, SearchButton, SearchInput, SearchWrapper} from "./Home.style";
import searchIcon from './search.png'

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <SearchWrapper>
          <SearchInput placeholder={'Type to search cool GIFs'} />
          <SearchButton src={searchIcon} />
        </SearchWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
