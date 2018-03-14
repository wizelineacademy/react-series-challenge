import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
border: 16px solid #f3f3f3; /* Light grey */
border-top: 16px solid #3498db; /* Blue */
border-radius: 50%;
width: 120px;
height: 120px;
animation: ${ Spin } 300ms linear infinite;
`


export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 5px;
  padding: 10px;
  max-height: 500px;
  max-width: 1000px;
`;

export const Name = styled.strong`
  margin: 20px 0;
  color: white;
`;

export const Image = styled.img`
  object-fit: contain;
  max-height: 400px;
  max-width: 800px;
`;

export const DetailItem = styled.div`
  flex: 50%;
`;

export const DetailsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ExpandButton = styled.button`

`
