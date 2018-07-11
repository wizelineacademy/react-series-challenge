import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    right: 5px;
    top: 10px;
    background-color: transparent;
    color: ${props => props.favorite ? "#00a2ff" : "#ccc" };
    font-size: 3rem
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