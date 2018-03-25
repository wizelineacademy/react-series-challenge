import styled from 'styled-components';

export const MasonryItem = styled.div`
  display: flex;
  align-items: center;
  flex: auto;
  min-width: 150px;
  margin: 0 8px 8px 0;
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