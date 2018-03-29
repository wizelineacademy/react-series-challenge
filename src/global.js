import {injectGlobal} from 'styled-components';
injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    
    }
    .app-root
    {
        max-width: 320px;
        height: 480px;
        border: 1px solid #ccc;
        margin: 50px auto;
        position: relative;
    }
    .app-root .app
    {
        position:absolute;
        top: 52px;
        left: 0;
        bottom: 0;
        right: 0;
        overflow:auto;
        overflow-x: hidden;
        background-color: #f5f5f5;
    }
    .app-root content
    {
        position: absolute;
        top: 60px;
    }

`;