import React from "react";
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';

const Home = (props) => {

  const {
    gifts,
  } = props;


  return (
    <GiftContainer>
      <h3>{props.gifts}</h3>
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