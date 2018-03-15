import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { images, title } = this.props
    return (
      <div>
        <img src={images.fixed_width.url} alt={title}/>
        <button>fav</button>
      </div>
    );
  }
}

export default Item;
