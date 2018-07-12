import React, { Component }  from "react";
import { connect } from 'react-redux';
import { SearchBarHome } from '../SearchBars';
import giftActions from '../../redux/actions/gifts';
import { bindActionCreators } from 'redux';
import GiftContainer from '../GiftContainer';
import GiftList from '../GiftList';

export class Home extends Component {
  componentDidMount(){
    this.props.getGift({ text: "" });
  }

  render(){
    const { gifts } = this.props;

    return (
        <GiftContainer
          searchBar = {<SearchBarHome />}
          gifts = {gifts}
          giftList = {gifts ? <GiftList 
                          gifts={gifts}/>:""}
          />
    );
  }
}

function mapStateToProps (state) {
  const { gifts, } = state;
  
  return { gifts, };
};

function mapDispatchToProps (dispatch) {
  const { getGift } = giftActions.creators;

  return bindActionCreators({ getGift, }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
