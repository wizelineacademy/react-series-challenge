import { injectGlobal } from 'styled-components';

export const themeSunny = {
    gifPageBackground: '#969ec3',
    favoritePageBackground: '#c8bed7',
    headerBackground: '#fde1cc',
    cardBackground: '#fec492',
}
  
export const themeNightly = {
    gifPageBackground: '#131862',
    favoritePageBackground: '#2e4482',
    headerBackground: '#87889c',
    cardBackground: '#bea9de',
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