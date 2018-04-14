import styled from 'styled-components';

const FavoritesContainer = styled.div`
  margin: 0px 0px 0px 15px;
  padding-top: 35px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: flex-end;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;

export {
  FavoritesContainer
};
