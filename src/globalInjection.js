import { injectGlobal } from 'styled-components';

export const themeSunny = {
    gifPageBackground: '#ff0198',
}
  
export const themeNightly = {
    gifPageBackground: '#6e27c5',
}

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