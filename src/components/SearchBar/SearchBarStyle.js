import styled from "styled-components";

const FormStyle = styled.form`
    display: flex
`;

const ButtonSearchStyle = styled.button`
    border: none;
    background: linear-gradient(-90deg, #8E43FD, #E086D3);
    border-radius: 0 1rem 1rem 0;
    color: white;
    font-size: 2rem;
    padding: 0 1rem;
`;

const SearchBarStyle = styled.input`
    font-size: 2rem;
    width: 200px;
    border-radius: 1rem 0 0 1rem;
    padding: 0.5rem 3rem;
    border: none;
    transition: ease-in-out, width .35s ease-in-out;

    &:focus {
        width: 250px;
        outline: none
    }
`;


export { SearchBarStyle, ButtonSearchStyle, FormStyle };