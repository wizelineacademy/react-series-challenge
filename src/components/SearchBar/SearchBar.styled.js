import styled from 'styled-components'

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1040px;
  margin: 0 auto;
`

const SearchBarForm = styled.form`
  width: 100%;
`;

const SearchBarButton = styled.a`
  border: 1px solid #fff;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  padding: 0 10px;
`

const SearchBarInput = styled.input`
  border: 0;
  font-size: 18px;
  width: 100%;
  height: 50px;
  padding: 0 17px;
`

export {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput
}