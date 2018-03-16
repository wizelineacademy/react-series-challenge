import styled from 'styled-components';

export const BtnsWrapper =  styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  transition: opacity .2s, visibility .2s;
  top: 0;
  visibility: hidden;
`;

export const GifCardWrapper = styled.div`
  padding: 3px;
  position: relative;
  width: fit-content;
  
  &:hover ${BtnsWrapper} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Btn = styled.img`
  cursor: pointer;
  height: 45px;
  padding: 0 15px;
  width: 45px;
`;

Btn.displayName = 'Btn';
