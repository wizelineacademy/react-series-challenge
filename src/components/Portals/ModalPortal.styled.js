import styled from 'styled-components';

const visible = ({ open }) => open ? 'block' : 'none';

const ModalStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  text-align: center;
  color: #dee3eb;
  background-color: #F00;

  display: ${visible};

  div {
    color: white;
    background-color: black;
    padding: 30px;
    cursor: pointer;
  }

  h2 {
    color: #dee3eb;
    text-transform: capitalize;
    font-size: 5em;
    margin-top: 10%;
  }

  span {
    font-size: 14em;
    color: #dee3eb;
  }
`;

export { ModalStyled };
