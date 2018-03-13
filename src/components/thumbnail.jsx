import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThumbnailWrapper = styled.section`
  position: relative;
  background: white;
  padding: 5px;
  margin: 5px;

  a { height: 100%; display: inline-block; }
  img { object-fit: cover; }

  :hover a {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconsDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
`;

const Icon = styled.a`
  margin: 2px;
  opacity: 0;
  transform: translateY(50%);

  > i {
    display: block;
    font-size: 23.52941176px;
    line-height: 40px;
    width: 40px;
    background-color: #ffffff;
    text-align: center;
    color: #000000;
  }

  > i:hover {
    background-color: #4da3e2;
    color: #ffffff;
    cursor: pointer;
  }
`;

const FavIcon = Icon.extend`
  > i {
    color: #fff;
    background-color: #4da3e2;
  }
`;

const Thumbnail = ({ id, title, url, toggleFavorite, isFav }) => {
  const DisplayIcon = isFav ? FavIcon : Icon;
  return (
    <ThumbnailWrapper>
      <Link to={`/gifs/${id}`}><img src={url} alt={title} width={200} height={120} /></Link>
      <IconsDiv isFav={isFav}>
        <DisplayIcon alt="Fav" onClick={() => toggleFavorite(id)}><i className="far fa-thumbs-up" /></DisplayIcon>
      </IconsDiv>
    </ThumbnailWrapper>
  );
};

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default Thumbnail;
