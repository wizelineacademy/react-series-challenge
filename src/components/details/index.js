import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions'
import { BigImageStyled } from '../../styled/ImgStyled';
import { CardStyled }from '../../styled/ContainersStyled';
import { FavoriteButton } from '../../styled/ButtonStyled'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
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
        <br />
        <FavoriteButton onClick={this.props.addRemoveFavoriteDetails.bind(this,this.props.detailsImage)} href=''>{this.props.detailsImage.favorite ? `I'm one of your favorites! :)` : 'Add To Favorites'}</FavoriteButton>
      </CardStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
  //   detailsRequest,
  //   toogleFavoriteDetails
  getDetails,
  addRemoveFavoriteDetails
  } = actions;

  return bindActionCreators({
    // detailsRequest,
    // toogleFavoriteDetails
    getDetails,
    addRemoveFavoriteDetails
  }, dispatch);
}

const mapStateToProps = (state) => {
  const { loading } = state.loading;
  const { detailsImage } = state.details;
  return { loading, detailsImage };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
