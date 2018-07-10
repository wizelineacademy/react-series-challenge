import React, { Component } from "react";

class Header extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.searchInput.value.length === 0) {
      this.searchInput.focus();
      alert('please enter the text to be search');
     }

    if (this.props.home) {
      this.props.fetchChange(this.searchInput.value.trim());
    } else {
      this.props.localFind(this.searchInput.value.trim());
    }
  }

  handleButton = (event) => {
    event.preventDefault();
    this.props.fetchChange('');
  }

  render() {
    const { match } = this.props;

    let buttonView = 'the search will be for only the favorites...';
    if (this.props.home) {
      buttonView = <input type="button" value="just show the trendings" onClick={this.handleButton} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>API:</legend>
          Search: <input type="text" ref={input => { this.searchInput = input; } } />
          <input type="submit" value="Search" />
          <br />
          <br />
          {buttonView}
        </fieldset>
      </form>
    )
  }
}
export default Header;