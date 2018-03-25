import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  color: ${({ selected }) => (selected ? 'red !important' : 'black')}
`

export default LinkStyled;