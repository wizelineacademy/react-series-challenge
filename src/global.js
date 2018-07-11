import { injectGlobal } from "styled-components";

injectGlobal`
    @font-face{
        font-family: 'SoberanaSans';
        src: url("https://fonts.googleapis.com/css?family=Volkhov")
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;    
    }

    #root {
        min-height: 100vh;
        display: flex;
        background-color: black;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: "Volkhov", sans-serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1.5rem;
        color: #565656;
        min-height: 100vh;
        margin: 0;
    }

`;