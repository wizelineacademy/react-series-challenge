import styled from 'styled-components';

export const HoldMessageWrapper = styled.div`
  margin-top: 350px;
`;

export const Message = styled.p`
  color: white;
  font-stretch: normal;
  font-style: normal;
  font-weight: 800;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
`;

export const HTTPError = Message.extend`
  font-size: 60px;
`;

export const HTTPMessage = Message.extend`
  font-size: 40px;
`;
