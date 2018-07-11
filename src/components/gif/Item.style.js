import styled from 'styled-components';

export const Item = styled.div`
  padding: 0 6px;
  float: left;
  width: 20%;
  box-sizing: border-box;
  margin-bottom: 20px;

  figure {
    padding: 0;
    margin: 0;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  figure > img {
    width: 100%;
    height: 250px;
  }

  figcaption {
    padding: 0 10px;
    height: 50px;
  }

  figcaption p {
    font-size: 0.8em;
    margin: 0;
  }
`;

export const FavoriteButton = styled.button`
  width: 30px;
  height: 30px;
  background: url(${props =>
      props.favorite
        ? './resources/favorite.svg'
        : './resources/no-favorite.svg'})
    no-repeat;
  background-repeat: no-repeat;
  border: none;
  outline: unset;
`;
