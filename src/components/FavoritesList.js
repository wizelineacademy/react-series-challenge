import React from "react";
import GiftItem from './giftItem';

const FavoritesList = (props) => {
    const { gifts } = props

    return Object.values(gifts).map((item, index)=> (
      <GiftItem 
        url={item.url}
        name={item.name}
        id={item.id}
        key={index}/>
    ));
}

export default FavoritesList;
export {
    FavoritesList
}