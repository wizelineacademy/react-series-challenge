import styled from 'styled-components';

const Image = styled.img`
	border: 2px solid black;
	border-radius: 50px;
	height: ${props => (props.big ? '30vw' : null)};
`;

const ImageDetails = styled.div`
	border: 2px solid transparent;
	border-radius: 20px;
	:hover {
		border: 2px solid red;
	}
`;

const ImageCard = styled.div`
	display: inline-block;
	flex-basis: 25%;
	width: ${props => (props.big ? '80vw' : null)};
	margin-top: 3em
	text-align: center;
	:hover {
		box-shadow: 16px 16px 16px 16px rgba(0, 0, 0, 0.2);
	}
`;
const Border = styled.div`
	width: ${props => (props.home ? '80%' : '100%')};
	margin: 0 auto;
`;

const FlexBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	align-content: center;
`;

const Title = styled.h1`
	font-size: 8vw;
	color: Crimson;
	font-weight: bold;
	text-align: center;
	margin-bottom: 1%;
	:before {
		content: 'Gif';
		animation-name: head;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}

	@keyframes head {
		0% {
			content: 'Gif';
			opacity: 1;
		}
		12.5% {
			opacity: 0;
		}
		25% {
			content: 'Pug';
			opacity: 1;
		}
		37.5% {
			opacity: 0;
		}
		50% {
			content: 'Gif';
			opacity: 1;
		}
		62.5% {
			opacity: 0;
		}
		75% {
			content: 'Pug';
			opacity: 1;
		}
		87.5% {
			opacity: 0;
		}
	}
`;

const SubTitle = styled.h3`
	font-size: 5vw;
	color: Chocolate;
	text-align: left;
	margin: 1em 0 0 0;
`;

const SearchBar = styled.input`
width: 30%;
display:block;
text-align: center;
	padding: 0.5em;
	margin: 0 auto
	background: WhiteSmoke;
	border: 2px solid black;
	border-radius: 3px;
`;
const Header = styled.header`
	background: PeachPuff;
	margin-bottom: 0.5em;
`;

const FavButton = styled.button`
	background-color: #f44336;
	color: white;
	font-size: 100%;
`;

const FavIcon = styled.img`
	width: 2.5vw;
	min-width: 30px;
	margin: 0;
	float: right;
	z-index: 100;
`;

export {
	ImageDetails,
	Border,
	Title,
	SubTitle,
	ImageCard,
	Image,
	SearchBar,
	Header,
	FavButton,
	FavIcon,
	FlexBox
};
