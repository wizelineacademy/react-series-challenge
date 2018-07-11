import styled from 'styled-components';

export const Header = styled.header`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
  }

  ul li {
    float: left;
  }

  ul li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  ul li a:hover {
    background-color: #111111;
  }
`;
