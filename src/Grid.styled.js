import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  width: 100;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 1px;
    max-width: ${(props) => props.size ? (((props.size / 12) * 100) + '%') : '100%'};
    flex-shrink: ${(props) => props.size ? 0 : 'unset'};
    flex-basis: ${(props) => props.size ? (((props.size / 12) * 100) + '%') : 0};;
    flex-grow: ${(props) => props.size ? 0 : 1};;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;