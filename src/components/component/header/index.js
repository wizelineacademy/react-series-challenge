import React, { Component } from "react";

class Header extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.searchInput.value.length === 0) {
      this.searchInput.focus();
      alert('please enter the text to be search');
     }

    this.props.action(this.searchInput.value.trim());

  }

  handleButton = (event) => {
    event.preventDefault();
    this.props.action('');
    if (!this.props.home) {
      this.searchInput.value = '';
      this.searchInput.focus();
    }
  }

  render() {
    const { home } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>{(home ? 'API' : 'Favorites' )}:</legend>
          Search: <input type="text" ref={input => { this.searchInput = input; } } />
          <input type="submit" value="Search" />
          <br />
          <br />
          <input type="button" value={`${(home ? 'Just render trendings': 'Reset the search')}`} onClick={this.handleButton} />
        </fieldset>
      </form>
    )
  }
}
export default Header;