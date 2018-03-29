import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../../actions';
import { Wrapper } from '../../styled/ContainersStyled';

const SearchBar = (props) => {
  const {
    inputString,
    changeInput,
    handleSearch
  } = props
  return (
    <Wrapper>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type='text' onChange={changeInput} value={inputString} />
        <button onClick={handleSearch} >Buscar</button>
      </form>
    </Wrapper>
  )
}

const mapStateToProps = ({ search }) => {
  const { inputString } = search;

  return { inputString };
}

const mapDispatchToProps = (dispatch) => {
  const { changeInput } = actions

  return bindActionCreators({ changeInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);