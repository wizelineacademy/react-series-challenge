import styled from 'styled-components';

const Title = styled.div`
	display: block;
	font-size: 20px;
	text-align: center;
	padding: 10px;
`
const FavoriteList = styled.div`
	display:block;
	height: 100%;
`
const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 50px;
	overflow: auto;
`
const FilterBar = styled.div`
	display: block;
	box-sizing:border-box;
	padding: 10px;
	padding-right: 61px;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	input
	{
		border: 1px solid #ccc;
		line-height: 32px;
		padding: 0 10px;
		border-radius: 5px 0 0 5px;
		height: 32px;
		color: #333;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
	}
	span
	{
		background-color: #f5f5f5;
		width: 50px;
		display:block;
		position: absolute;
		height: 30px;
		top: 10px;
		right: 10px;
		border: 1px solid #ccc;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
	}
	span:hover {
		background-color: #f0f0f0;
	}
	span svg 
	{
		width: 15px;
		position: absolute;
		top: 8px;
		left: 17px;
		fill: #333;
	}
`

export {
	Title, FavoriteList, Content, FilterBar
};