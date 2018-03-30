import styled from 'styled-components';

const GifPreviewDivContainter = styled.div`
  position: relative;
`;

const GifPreviewStyled = styled.img`
  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : ''};
`;

export {GifPreviewDivContainter};
export default GifPreviewStyled;
