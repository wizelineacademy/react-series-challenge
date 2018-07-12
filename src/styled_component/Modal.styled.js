import styled from 'styled-components';

export const ModalHeader = styled.p`
    font-family: inherit;
    width: 180px;
    height: 50px;
    font-size: 22px;
    margin: auto;
    overflow: hidden;
    color: #696969;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
`

export const InfoContainer = styled.div`
    top: 60%;
    height: 100px;
`

export const ModalImage = styled.img`
    margin: 0px;
    padding: 0px;
    width: 210px;
`

export const ModalButtons = styled.span`
    
    font-family: inherit;
    font-size: 15px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 40px;
    text-transform: uppercase;
    color: #696969;

    &.favorite {
        color: #1E90FF;
    }

    &:hover {
        cursor: pointer;
    }

`
