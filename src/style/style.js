import styled from 'styled-components';

const ImageCard = styled.img`
	font-size: 1em;
	border: 4px solid black;
	border-radius: 10px;
	margin-right: 13px;
	margin-bottom: 8px;
`;

const Border = styled.div`
	width: ${props => (props.home ? '80%' : '100%')};
	margin-left: ${props => (props.home ? '10%' : '')};
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

export { ImageCard, Border, Title, SubTitle };
