import styled from 'styled-components';

const AddTransactionButtonContainerStyled = styled.div`
  padding: 20px 0 0 0;
`;

const TransactionsListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;
const GifPreview = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #e5e5e5;
  position: relative;
  float: left;
  overflow:hidden;

  img{
    min-height: 100px;
    min-width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-height: 100px;
  }
`
export {
  AddTransactionButtonContainerStyled,
  TransactionsListContainerStyled,GifPreview
};