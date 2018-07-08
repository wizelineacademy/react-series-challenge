import { Row } from './Grid.styled';
import styled from 'styled-components';

export const FullWidthGif = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
`;

export const LikeButton = styled.button`
  position: absolute;
  display: none;
  cursor: pointer;
  top: 15px;
  right: -10px;
  background-color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 3px 3px 57px -5px rgba(0,0,0,0.6);
  height: 1.5rem;
  width: 2.6rem;
  color:  ${(props) => props.liked ? '#ea0e24' : '#cfcfcf'};
  &:focus{
    outline: none;
  }
  @media only screen and (max-width : 768px) {
    display: block;
  }
`;

export const GifTitle = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 1.5rem;
  height: 1.5rem;
  font-size: 12px;
  background-color: rgba(0,0,0,0.7);
  color: #fff;
  border-radius: 0px 0px 1rem 1rem;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  transition: opacity 0.4s ease;
  span {
    max-height: 100%;
  }
  @media only screen and (max-width : 768px) {
    opacity: 1;
  }
`;



export const GifCard = styled.div`
  position: relative;
  height: 12rem;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    ${LikeButton} {
      display: block;
    }
    ${GifTitle} {
      opacity: 1;
    }
  }
`;

export const GifsRow = Row.extend`
  margin-top: 5rem;
`;