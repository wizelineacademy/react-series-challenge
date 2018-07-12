import styled from "styled-components";

export default styled.button`
    background: none;
    height: 32px;
    font-size: 20px;
    line-height: 32px;
    color: ${(props: any) => props.active ? "#FC4349" : "#FFF"};
    margin: 10px;
    opacity: 0.7;
    border: none;
    width: 32px;
    border-radius: 50%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    transition: opacity 0.25s;

    :hover {
        opacity: 1.0;
    }
`;
