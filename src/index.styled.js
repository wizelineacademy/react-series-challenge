import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: #121212;
    color: #fff;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
  }

  img {
    vertical-align: middle;
  }
`