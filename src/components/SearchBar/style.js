import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`

export const SearchBox = styled.div `
  position: absolute;
  input {
    border: none;
    background: none;
    z-index: 1;
    width: 50px;
    height: 50px;
    transition: all .25s ease-in .25s;
    color: transparent;
    font-size: 1.25rem;
    line-height:50px;
    &:hover {
      cursor: pointer;
      &:focus {
        cursor: text;
      }
      + span {
        background: rgba(255,255,255,0.2);
      }
    }
    &:focus {
      width: 200px;
      padding: 0 10px;
      outline: none;
      color: black;
      background:none;
      color: white;
      + span {
        width: 200px;
        &::before {
          width:2px;
          opacity: 0;
          transition: all .25s ease-in;
        }
      }
    }
    + span {
      z-index: -1;
      position: absolute;
      border: 2px solid white;
      top: 0;
      width: 50px;
      height: 50px;
      transition: all .25s ease-in .25s;
      border-radius: 50px;
      left: 0;
      &::before {
        transition: all .25s ease-in .5s;
        transform-origin: left top;
        content: '';
        position: absolute;
        width: 20px;
        height: 7px;
        border-radius: 5px;
        background: white;
        transform: rotate(45deg) translate(43px, 10px);
      }
    }
  }
`