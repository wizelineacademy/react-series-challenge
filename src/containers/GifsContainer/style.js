import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const PolaroidContainer = styled.ul`
  ${props => props.singleView ? 'left: calc(50% - 300px);' : ''}

  li:nth-child(even) {
    transform: rotate(2deg);
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
  }
  li:nth-child(3n) {
    transform: rotate(none);
    -webkit-transform: none;
    -moz-transform: none;
    position: relative;
    top: -5px;
  }
  li:nth-child(5n) {
    transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    position: relative;
    right: 5px;
  }
  li:nth-child(7n) {
    transform: rotate(-3deg);
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    position: relative;
    right: -5px;
  }
  li:nth-child(8n) {
    position: relative;
    top: 8px;
    right: 5px;
  }
  li:nth-child(11n) {
    position: relative;
    top: 3px;
    left: -5px;
  }
  ${props => !props.isSingleView && `
    li:hover {
      transform: scale(1.25);
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      transition: all 0.2s ease-out;
      position: relative;
      z-index: 5;
      display: inline-table;
      button {
        display: inline-block;
      }
    }
  `}
`
export const SquareLink = styled(NavLink)`
  background-color: #00c08b;
  color: #127a5d;
  height: 50px;
  width: 50px;
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.2) inset, 1px 1px 1px #CCC;
  display: inline-block;
  line-height: 1;
  margin: 5px;
  border-radius: 5px;
  position: relative;
  background-image: url('/home.svg');
  ${ props => props.favorites &&
    `background-image: url('/star.svg');
    background-color: #53bfe2;`
  }
  background-size: contain;
  &.active {
    display: none;
  }
`
