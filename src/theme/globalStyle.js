import { injectGlobal } from "styled-components";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700');

    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        background: rgb(1,12,15);
        color: rgb(252,254,255);
    }

    input,
    label,
    select,
    button,
    textarea
    {
        margin: 0;
        border: 0;
        padding: 0;
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
        background: none;
        line-height: 1.6;
        
        font-family: 'Montserrat', sans-serif;;
    }

    /* Remove the stupid outer glow in Webkit */
    input:focus,
    button:focus
    {
        outline: none;
    }
`;
