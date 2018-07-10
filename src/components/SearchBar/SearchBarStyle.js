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
    border-radius: 1rem 0 0 1rem;
    padding: 0.5rem 3rem;
    border: none;
`;


export { SearchBarStyle, ButtonSearchStyle, FormStyle };