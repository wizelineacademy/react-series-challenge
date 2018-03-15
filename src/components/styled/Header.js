import styled from 'styled-components'

const Header = styled.header`
  background-color: black;
  color: #3ab9ce;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    padding: 20px 25px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
  }

  li {
    float: left;
    text-align: center;

    a {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      min-width: 70px;
      padding: 0 20px;
      height: 100%;

      :hover {
        background-color: #3ab9ce;
        color: black;
      }
    }
  }
`

export default Header;
