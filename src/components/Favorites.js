import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';
import favoriteActions from '../redux/actions/favorites';
import AddGiftModal from './Modal/AddGiftModal';

const Favorites = (props) => {
    const {
        favorites,
    }=props

    return (
        <GiftContainer>
            <AddGiftModal />
            {favorites && <GiftList
                    gifts={favorites}/>}
        </GiftContainer>
    );
}

const GiftList = (props) => {
    const { gifts } = props
  
    return Object.values(gifts).map((item, index)=> (
      <FavoriteItem 
        url={item.url}
        name={item.name}
        id={item.id}
        key={index}/>
    ));
}

const FavoriteItem = (props) => {
    const {
        url, 
        name,
        id,
        deleteFavorite,
    }=props

    const gift = {url, name, id};

    return (
        <img src={url} width={"100px"} height={"100px"} onClick={()=>console.log("delete: ",{gift})}/>
    );
}

const  mapStateToProps = (state) => {
    const { favorites, } = state;
    
    return { favorites, };
};

const mapDispatchToProps = (dispatch) => {
    const { deleteFavorite } = favoriteActions.creators;

    return bindActionCreators({
        deleteFavorite,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
