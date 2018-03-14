import styled from "styled-components";

const StyledGif = styled.div`
  position: relative;
  padding: 20px;

  & img {
    position: relative;
    top: 0;
    width: 100%;
    cursor: pointer;
  }

  & .container {
    position: relative;
    top: 0;
    background: rgba(0,0,0,0.3);
  }

  & .container:hover {
    top: -5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }
`;

export default StyledGif;
