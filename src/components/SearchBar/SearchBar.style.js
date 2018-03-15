import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 920px;
  height: 20px;
  font-size: 15px;
  padding: 15px;
  margin-bottom: 14px;
  font-family: sans-serif;
  font-weight: 400;

  :focus {
    outline: none;
  }
`
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`
StyledForm.displayName = 'form'
