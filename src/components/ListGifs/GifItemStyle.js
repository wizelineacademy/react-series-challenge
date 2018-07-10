import styled from "styled-components";

const ItemGif = styled.div`
    position: relative;
    width: 280px;
    height: 280px;
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 10px;
    bottom: 0;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: contain;
`;

export { ItemGif, Image };