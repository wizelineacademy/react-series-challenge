import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../wrapper'

const SearchBar = (props) => {
  const {
    value,
    handleChange,
    handleSearch
  } = props
  return (
    <Wrapper>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type='text' onChange={handleChange} value={value} />
        <button onClick={handleSearch} >Buscar</button>
      </form>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  const { searchString } = state;

  return { searchString };
}

export default connect(mapStateToProps)(SearchBar);