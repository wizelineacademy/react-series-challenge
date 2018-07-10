import React, { Component } from "react";

import './giphys.css';

class Giphys extends Component {

  handleKeep = (event,index) => {
    event.preventDefault();
    const { data } = this.props.data;
    this.props.modifyLocal(data[index]);
  }

  render() {
    let giphyView;
    const { data, local } = this.props;

    if (data && data.data) {
      giphyView = data.data.map((v, i) => {
        let view = (
          <div key={v.id} className="giphy">
            <button onClick={(event) => this.handleKeep(event, i)}>{`${local.ids.includes(v.id) ? 'undo' : 'keep'}`}</button>
            <img src={v.images.fixed_width.webp} alt={v.title} />
          </div>
        );

        if (local.filter && !v.title.includes(local.filter)) {
          view = null;
        }

        return view;
      });
    }

    return (
      <div>
        {giphyView}
      </div>
    )
  }
}

export default Giphys;