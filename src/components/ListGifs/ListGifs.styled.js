import styled from 'styled-components';

const ListGifStyled = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
list-style: none;
padding: 0;
margin: 0;
li{
    background-color: #000;
    transition: transform .15s ease-in;
    &:hover {
        transform:scale(1.25, 1.25);
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`;

export {
    ListGifStyled
};