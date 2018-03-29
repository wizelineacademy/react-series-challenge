import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions'
import { BigImageStyled } from '../../styled/ImgStyled';
import { CardStyled }from '../../styled/ContainersStyled';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    // this.props.detailsRequest(this.props.match.params.id);
    const { id } = this.props.match.params;
    this.props.getDetails(id);
  }

  render() {
    if(this.props.loading){
      return (<div>Loading...</div>)
    }
    return (
      <CardStyled>
        <BigImageStyled src={this.props.detailsImage.images.original.url} />
        <a onClick={this.props.toogleFavoriteDetails.bind(this,this.props.image)} href=''>Agregar a Favoritos</a>
      </CardStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
  //   detailsRequest,
  //   toogleFavoriteDetails
  getDetails
  } = actions;

  return bindActionCreators({
    // detailsRequest,
    // toogleFavoriteDetails
    getDetails
  }, dispatch);
}

const mapStateToProps = ({ details }) => {
  const { detailsImage } = details;
  return { detailsImage };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
