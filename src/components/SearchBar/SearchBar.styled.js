import styled from 'styled-components';

export const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  padding: 5px 10px;
  font-size: 20px;
  height: 45px;
  box-sizing: border-box;
  appearance: none;
  border: 1px solid ${props => props.theme.primary.background};
`;

export const SearchBarButton = styled.button`
  cursor: pointer;
  appearance: none;
  height: 45px;
  box-sizing: border-box;
  padding: 5px 20px;
  font-size: 20px;
  transition: all 0.5s;
  color: ${props => props.theme.primary.foreground};
  border: none;
  background-color: ${props => props.theme.primary.background};

  :hover {
    background-color: ${props => props.theme.secondary.background};
  }
`;
