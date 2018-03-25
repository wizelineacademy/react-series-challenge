import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MasonryItem = styled.div`
  display: flex;
  align-items: center;
  flex: auto;
  min-width: 150px;
  margin: 0 8px 8px 0;
  width: ${(props) => props.fullWidth ? '100% !important' : 'initial'};
  justify-content: ${(props) => props.fullWidth ? 'center' : 'initial'};
  &:nth-child(4n+1){
     width: 250px;
  }
  &:nth-child(4n+2){
     width: 325px;
  }
  &:nth-child(4n+3){
     width: 180px;
  }
  &:nth-child(4n+4){
     width: 380px;
  }
  img {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  opacity: 0;
  transition: 0.5s all;
  &:hover {
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  position:relative;
`;

export const LinkStyled = styled(Link)`
  color: #ffc800;
`;