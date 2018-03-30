import styled from 'styled-components';

const DetailViewStyled = styled.div`
  min-width: 100px;
  min-height: 100px;

  width: ${props => props.width ? props.width : ''}
  height: ${props => props.height ? props.height : ''}
`;

export default DetailViewStyled;
