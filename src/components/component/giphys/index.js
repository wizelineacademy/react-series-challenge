import React, { Component } from "react";

import actions from "./../../../redux/actions";

import './giphys.css';

class Giphys extends Component {
  constructor(props) {
    super(props);
  }

  handleKeep = (event,index) => {
    event.preventDefault();
    const { data } = this.props.data;
    this.props.modifyLocal(data[index]);
  }



  render() {

    let giphyView;
    const { data, ids } = this.props;
    console.log(':::: ids 2 ::::', ids);

    if (data && data.data) {
      giphyView = data.data.map((v, i) => (
        <div key={v.id} className="giphy">
          <button onClick={(event) => this.handleKeep(event, i)}>{`${ids.includes(v.id) ? 'undo' : 'keep'}`}</button>
          <img src={v.images.fixed_width.webp} alt={v.title} />
        </div>
      ));
    }

    return (
      <div>
        {giphyView}
      </div>
    )
  }
}

// export default connect(null,mapDispatchToProps)(Giphys);
export default Giphys;