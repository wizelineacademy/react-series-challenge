import React, { Component }  from "react";
import { connect } from 'react-redux';
import { SearchBarHome } from '../SearchBars';
import giftActions from '../../redux/actions/gifts';
import { bindActionCreators } from 'redux';
import GiftContainer from '../GiftContainer';
import GiftItem from '../giftItem';

class Home extends Component {
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

const GiftList = (props) => {
  const { gifts } = props

  console.log("gifts:",gifts)
  if(gifts.length < 5){
    throw new Error("Not Found")
  }
  
  return (Object.values(gifts).map((item, index)=> (
    <GiftItem 
      url={item.images.preview_gif.url}
      name={item.title}
      id={item.id}
      key={index}/>
  )));
  
};

function mapStateToProps (state) {
  const { gifts, } = state;
  
  return { gifts, };
};

function mapDispatchToProps (dispatch) {
  const { getGift } = giftActions.creators;

  return bindActionCreators({ getGift, }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);