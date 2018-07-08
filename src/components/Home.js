import React, { Component }  from "react";
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';
import SearchBarHome from './SearchBars';
import giftActions from '../redux/actions/gifts';
import { bindActionCreators } from 'redux';
import GiftItem from './giftItem'

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getGift({ text: "" });
  }

  render(){
    const { gifts } = this.props;

    return (
      <GiftContainer>
        <SearchBarHome />
        {gifts && <GiftList
                    gifts={gifts}/>}
      </GiftContainer>
    );
  }
}

const GiftList = (props) => {
  const { gifts } = props

  return Object.values(gifts).map((item, index)=> (
    <GiftItem 
      url={item.images.preview_gif.url}
      name={item.title}
      id={item.id}
      key={index}/>
  ));
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