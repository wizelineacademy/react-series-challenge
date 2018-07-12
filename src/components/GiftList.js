import React  from "react";
import GiftItem from './giftItem';


const GiftList = (props) => {
    const { gifts } = props
    
    return (Object.values(gifts).map((item, index)=> (
      <GiftItem 
        url={item.images.preview_gif.url}
        name={item.title}
        id={item.id}
        key={index}/>
    )));
  };

export default GiftList;
export {
  GiftList
}