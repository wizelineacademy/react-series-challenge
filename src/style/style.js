import styled from 'styled-components';

const Image = styled.img`
	border: 2px solid black;
	border-radius: 50px;
`;

const ImageDetails = styled.div`
	border: 2px solid red;
	border-radius: 20px;
`;

const ImageCard = styled.div`
	width: 30%;
	float: left;
	text-align: center;
	display: block;

	:hover {
		box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
const Border = styled.div`
	width: ${props => (props.home ? '80%' : '100%')};
	margin: 0;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%) }
`;

const Title = styled.h1`
	font-size: 8em;
	color: Crimson;
	font-weight: bold;
	text-align: center;
`;

const SubTitle = styled.h3`
	font-size: 3em;
	color: Chocolate;
	text-align: left;
`;

export { ImageDetails, Border, Title, SubTitle, ImageCard, Image };
