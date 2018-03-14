import styled from 'styled-components';
import loadingImage from  '../../assets/loading.gif'
export const Image = styled.img`
  flex: 1;
  object-fit: contain;
  width: 75%;
  background-image: url('${loadingImage}');
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
  background-size: 130px 70px;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 200px;
  cursor: pointer;
`;


export const Data = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background: rgba(200, 200, 200, 0.5);
  color: white;
  font-weight: bold;
  span + span {
    margin-left: 5px;
  }
`;

export const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 33%;
  min-width: 300px;
  min-height: 300px;
  max-width: 300px;
  max-height: 300px;
  transition: all ease 200ms;

  &:hover {
    ${Image} {
      transform: translateY(-5px) scale(1.13);
    }
  }
`;
