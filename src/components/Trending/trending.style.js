import styled from 'styled-components'
import gif from '../Gif'

export const Title = styled.h1`
    font-size: 2rem;
    font-family: sans-serif;
    text-align: center;
`

export const Gifs = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 12rem);
    grid-template-rows: repeat(auto-fill, 12rem);
`

export const Gif = styled(gif)`
    width: 12rem;
    height: 12rem;
    clip-path: inset(0 round 5%);
    transition: clip-path 100ms;

    &.favorite {
        clip-path: polygon(25% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%);
    }
`