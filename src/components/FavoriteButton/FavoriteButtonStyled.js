import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    right: 2px;
    top: 5px;
    background-color: transparent;
    color: ${props => props.favorite ? "#EF4748" : "#ccc" };
    font-size: 2.5rem
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