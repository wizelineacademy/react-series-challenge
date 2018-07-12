import styled from 'styled-components';

const CardsContainer = styled.div`
    /*display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;*/
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
`;

export {
    CardsContainer,
}