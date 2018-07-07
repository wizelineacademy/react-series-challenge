import React, { Component }  from "react";
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';
import SearchBarHome from './SearchBars';
import giftActions from '../redux/actions/gifts';
import favoriteActions from '../redux/actions/favorites';
import { bindActionCreators } from 'redux';
import { Portal, Modal } from './Portals/index';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = { open: false };
  }

  showModal = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }
  
  componentDidMount(){
    this.props.getGift({ text: "" });
  }

  render(){
    const { open, } = this.state;
    const { gifts } = this.props;

    return (
      <GiftContainer>
        <SearchBarHome />
        {gifts && <GiftList
                    gifts={gifts}/>}
        {/*<ShowPortal 
          onClick={this.showModal}
        open={open}/>*/}
      </GiftContainer>
    );
  }
}

const GiftList = (props) => {
  const { gifts } = props

  return Object.values(gifts).map((item, index)=> (
    <GiftItem 
      url={item.images.preview_gif.url}
      name={item.title}/>
  ));
}

const handleFavorite = (props) => {
  const {
    addFavorite,
    gift
  } = props
  console.log("--->", props)
  addFavorite(gift);
}

const GiftItem = (props) => {
  const {url, name, addFavorite}=props
  const gift = { url, name }
  return (
    <img src={props.url} width={"100px"} height={"100px"} onClick={()=>addFavorite({gift})}/>
  );
}

const ShowPortal = ({onclick, open}) => {
  return (
    <Portal>
      <Modal open={open} onClick={onclick}>
        <span>hola</span>
      </Modal>
    </Portal>
  );
}

function mapStateToProps (state) {
  const { gifts,  } = state;
  
  return { gifts, };
};
function mapDispatchToProps (dispatch) {
  const { getGift } = giftActions.creators;
  const { addFavorite, } = favoriteActions.creators;

  return bindActionCreators({ getGift, addFavorite, }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);