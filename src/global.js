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
        max-height: 480px;
        border: 1px solid #ccc;
        overflow:scroll;
        overflow-x: hidden;
        margin: 50px auto;
    }
`;