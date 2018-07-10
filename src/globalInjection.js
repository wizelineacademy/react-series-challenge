import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Quicksand');  
    
    @font-face { 
        font-family: 'Quicksand', sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Quicksand');
    }

    body {
        font-family: 'Quicksand', sans-serif;
        height: 100%;
    }

`