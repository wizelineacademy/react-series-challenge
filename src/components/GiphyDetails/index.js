import React from "react";
import {FavBox} from '../FavBox';
import {
  Card,
  Image,
  Name,
  Loader
} from './GiphyDetails.styled';

const GiphyDetails = props => {
  if (props.isLoading){
    return <Loader />
  } 
  const { title, id, isFav, images } = props.giphy;
  return (
    <Card>
        <Image src={ images.downsized_large.url } />
        <Name>{title}</Name>
        <FavBox checked={ isFav } id={id } onClick={() => props.onFavClick(props.giphy)} />
    </Card>
  );
};

export default GiphyDetails;
