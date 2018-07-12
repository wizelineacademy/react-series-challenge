import styled from 'styled-components'

export const Portal = styled.div`
  width: 500px;
  height: 600px;
  margin:auto;
  background-color:gray;
  text-align:center;

  img {
    width: 100%;
    height: 500px;
  }
`

export const Content = styled.div`
  position:absolute;
  overflow:hidden;
  z-index:-1;
`

export const BtnClose = styled.button`
  width: 100%;
  height: 40px;
  background-color:green;
  font-size: 20px;
`
