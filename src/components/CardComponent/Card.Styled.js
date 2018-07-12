import styled from 'styled-components';

export const CardItem = styled.div`
	width: 60%;
	margin: 0 auto 20px;
	border: 5px solid ${props => props.theme.cardColor};
	background-color: ${props => props.theme.cardColor};
	img{
		width:100%;
	}
`;

export const CardFooter = styled.div`
	padding: 5px 0 15px;
`;

export const FavButton = styled.button`
	background-color: transparent;
	border: 0 none;
	color: ${props => props.favorite ? 'red' : 'white'};
	font-size: 20px;
	float: right;
	cursor: pointer;
`;