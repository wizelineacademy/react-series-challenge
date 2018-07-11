import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';

const onFormSubmit = e => e.preventDefault();

const SearchBar = ({
  inputString,
  changeInput,
  handleSearch,
  handleChange,
}) => (
  <div>
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        onChange={handleChange || changeInput}
        value={inputString}
      />
      <button onClick={handleSearch}>Buscar</button>
    </form>
  </div>
);
const mapStateToProps = ({ search }) => {
  const { inputString } = search;

  return { inputString };
};

const mapDispatchToProps = dispatch => {
  const { changeInput } = actions;

  return bindActionCreators({ changeInput }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
