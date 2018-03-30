import styled from 'styled-components';

const GIFViewContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`;

const Content = styled.div`
  color: white;
  text-align: center;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`;

const FavoriteContainer = styled.div`
  padding: 0 20px;
  display: fixed;
  bottom: 0;
  grid-column: 4;
  grid-row: 2 / 3;
`;

const ButtonAddFavorite = styled.button`
  color: #ffffff;
  background: #3dd28d;
  overflow: hidden;

  margin: 10px;
  padding: 12px 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;

  border-radius: 4px;
  border: 0 none;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;

  box-shadow: 2px 5px 10px #e4e4e4;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

const ButtonRemoveFavorite = styled.button`
  color: #ffffff;
  background: #f32c52;
  overflow: hidden;

  margin: 10px;
  padding: 12px 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 4px;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;

  box-shadow: 2px 5px 10px #e4e4e4;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

export {
  GIFViewContainerStyled,
  Content,
  FavoriteContainer,
  ButtonAddFavorite,
  ButtonRemoveFavorite
};
