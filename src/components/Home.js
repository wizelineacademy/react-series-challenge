import React from "react";
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';
import GetGifts from './buttons'

const GiftList = ({gifts}) => {

  return Object.values(gifts).map((item, index)=> (
    <GiftItem 
      url={item.images.downsized.url} 
      key={index}
      name={item.title}/>
  ));
}

const GiftItem = ({url, key, name}) => {
  return (
    <img src={url}/>
  );
}

const Home = (props) => {

  const {
    gifts,
  } = props;

  return (
    <GiftContainer>
      <GetGifts />
      {props.gifts &&
      <GiftList
        gifts={props.gifts}/>}
    </GiftContainer>
  );

}

const mapStateToProps = (state) => {
  const {
    gifts,
  } = state;
  
  return {
    gifts,
  };
};
  
export default connect(mapStateToProps, null)(Home);