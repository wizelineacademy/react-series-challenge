import styled from 'styled-components';

export const DetailWrapper = styled.div`
  margin: auto;
  margin-top: 150px;
  padding: 10px;
  width: fit-content;
`;

export const Title = styled.p`
  color: white;
  display: inline-flex;
  font-size: 40px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 800;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0;
`;

const Btn = styled.img`
  cursor: pointer;
  height: 64px;
  float: right;
`;

export const NavigationBtn = Btn.extend`
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  margin-left: 10px;
`;
NavigationBtn.displayName = 'NavigationBtn';
