import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    right: 10px;
    top: 15px;
    background-color: transparent;
    color: ${props => props.favorite ? "#00a2ff" : "#ccc" };
    font-size: 3.5rem
    font-weight: bold;
    border: none;
    &:focus {
        outline: 0;
    }
    cursor: pointer

    &:hover {
        transform: translateY(-3px);
    }
`;

export { Button };