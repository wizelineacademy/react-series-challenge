import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions'
import CardStyled from './CardStyled';
import BigImageStyled from './BigImageStyled';

const st = { 
  display: 'block'
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.detailsRequest(this.props.match.params.id);
  }

  render() {
    if(this.props.loading){
      return (<div>Loading...</div>)
    }
    return (
      <CardStyled>
        <BigImageStyled src={this.props.image.images.original.url} />
        <a style={st} onClick={this.props.toogleFavoriteDetails.bind(this,this.props.image)} href=''>Agregar a Favoritos</a>
      </CardStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    detailsRequest,
    toogleFavoriteDetails
  } = actions;

  return bindActionCreators({
    detailsRequest,
    toogleFavoriteDetails
  }, dispatch);
}

const mapStateToProps = ({ details }) => {
  const { image, loading } = details;
  return { image, loading };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
