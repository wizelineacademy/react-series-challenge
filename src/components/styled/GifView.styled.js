import styled from 'styled-components';

export const Gif = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
`;

const GifView = styled.div`
  display: inline-block;
  padding: 10px;
`;

export default GifView;