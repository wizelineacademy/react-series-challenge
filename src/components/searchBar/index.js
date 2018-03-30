import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../../actions';
import { Wrapper } from '../../styled/ContainersStyled';
import { FormStyled, InputStyled } from '../../styled/FormStyled'
import { SearchButton } from '../../styled/ButtonStyled'
import { ZoomGlass } from '../../styled/IconsStyled'

const SearchBar = (props) => {
  const {
    inputString,
    changeInput,
    handleSearch,
    handleChange
  } = props
  return (
    <Wrapper>
      <FormStyled onSubmit={(e)=>{e.preventDefault()}}>
        <InputStyled type='text' onChange={handleChange || changeInput} value={inputString} />
        <SearchButton onClick={handleSearch} ><ZoomGlass /></SearchButton>
      </FormStyled>
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