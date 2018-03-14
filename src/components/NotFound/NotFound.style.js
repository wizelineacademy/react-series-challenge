import styled from 'styled-components';

export const HoldMessageWrapper = styled.div`
  margin-top: 350px;
`;

export const Message = styled.p`
  text-align: center;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

export const HTTPError = Message.extend`
  font-size: 60px;
`;

export const HTTPMessage = Message.extend`
  font-size: 40px;
`;
