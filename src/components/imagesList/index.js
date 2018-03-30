import React from 'react';
import { connect } from 'react-redux';
import { ListWrapperStyled, ListItemStyled } from '../../styled/ContainersStyled'
import { ImgStyled } from '../../styled/ImgStyled';
import { FavoriteButton } from '../../styled/ButtonStyled';
import { Link } from 'react-router-dom';

const ImagesList = (props) => {
  const { currentList, favButton, favorites } = props
  const items = currentList.map((image, index) => {
    return (
      <ListItemStyled key={image.id}>
        <Link to={`/image/${image.id}`}>
          <ImgStyled
            src={image.images.original.url}
            alt={`hi`}
          />
        </Link>
        <FavoriteButton onClick={favButton.bind(this,{ image, index })}>{favorites ? `I'm one of your favorites! :)` : image.favorite ? `I'm one of your favorites! :)` : 'Add To Favorites' }</FavoriteButton>
      </ListItemStyled>
    );
  });
  return (
    <ListWrapperStyled>
      {items}
    </ListWrapperStyled>
  )
}

const mapStateToProps = ({ list }) => {
  const { currentList } = list;
  return { currentList };
}

export default connect(mapStateToProps)(ImagesList);