import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ListWrapperStyled, ListItemStyled } from '../../styled/ContainersStyled'
import { ImgStyled } from '../../styled/ImgStyled';
import { Link } from 'react-router-dom';

const ImagesList = (props) => {
  const { currentList, favButton } = props
  const items = currentList.map((image, index) => {
    return (
      <ListItemStyled key={image.id}>
        <Link to={`/image/${image.id}`}>
          <ImgStyled
            src={image.images.original.url}
            alt={`hi`}
          />
        </Link>
        <button onClick={favButton.bind(this,{ image, index })}>Add to Favorites</button>
        {image.favorite ? 'soy favorito!' : null}
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