import styled from 'styled-components'
import gif from '../Gif'
import SearchBar from '../SearchBar'

export const Title = styled.h1`
    font-size: 2rem;
    font-family: sans-serif;
    text-align: center;
`

export const Gifs = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    padding: 2rem 0;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 12rem);
    grid-template-rows: repeat(auto-fill, 12rem);
`

export const Gif = styled(gif)`
    width: 12rem;
    height: 12rem;
    clip-path: inset(0 round 5%);
    &.favorite {
        clip-path: polygon(25% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%);
    }
`
export const SearchBarStyled = styled(SearchBar)`
    width: 100%;
    padding: 0.5rem 0 0.5rem 1rem;
    background-color: white;
    border: none;
    border-bottom: #858ECC solid thin;
    transition: all 500ms;

    &:focus::placeholder {
        color: #858ECC;
        font-weight: bold;
    }
`

export const FavoritesStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`