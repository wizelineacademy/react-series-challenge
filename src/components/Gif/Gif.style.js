import styled from 'styled-components';

const GifContainer = styled.div`
  float: left;
  height: 300px;
  width: 200px;
  margin: 10px;
  padding: 10px
`;

const GifTitle = styled.p`
  text-align: center;
`;

const GifImage = styled.iframe`
  width: 100%;
  height: 200px;
`;

const GifLikeContainer = styled.img`
  cursor: pointer;
`;

export {
  GifContainer,
  GifTitle,
  GifImage,
  GifLikeContainer,
};
