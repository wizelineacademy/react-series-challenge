import styled from 'styled-components';

const Image = styled.img`
	border: 2px solid black;
	border-radius: 50px;
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
	padding: 1em;
	margin-right: 5%;
	text-align: center;
	:hover {
		box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
const Border = styled.div`
	width: ${props => (props.home ? '80%' : '100%')};
	margin: 0 auto;
`;

const Title = styled.h1`
	font-size: 8vw;
	color: Crimson;
	font-weight: bold;
	text-align: center;
	margin-bottom: 1%;
`;

const SubTitle = styled.h3`
	font-size: 6vw;
	color: Chocolate;
	text-align: left;
`;

const SearchBar = styled.input`
width: 30%;
display:block;
text-align: center;
	padding: 0.5em;
	margin: 0 auto
	background: WhiteSmoke;
	border: none;
	border-radius: 3px;
`;
const Header = styled.header`
	background: salmon;
	margin-bottom: 5em;
`;

const FavButton = styled.button`
	background-color: #f44336;
	color: white;
	font-size: 3vw;
`;

const FavIcon = styled.img`
	width: 30px;
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
	FavIcon
};
