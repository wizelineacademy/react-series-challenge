import styled from 'styled-components';

export const _div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const _gif_div = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 1em;
`;
export const _gif_title = styled.p`
    position: absolute;
    top: 0px;
    min-height: 32px;
    text-align: center;
    background-color: rgba(0,0,0, 0.5);
    color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    small { padding: 1em; text-align: center; }
`;
