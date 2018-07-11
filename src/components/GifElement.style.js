import styled from 'styled-components';

export const GifPreview = styled.img`
height: 140px;
width: 140px;
border: 10px solid black;
`;
export const Wrapper = styled.div`
max-width: 160px;
display: inline-block;
margin: 7px;
padding: 1px;
border: 2px solid black;
`;

export const LikeButton = styled.button`
background: ${props => props.liked ? 'white' : '#4267b2'};
border: 2px solid #4267b2;
border-radius: 5px;
display: block;
font-size: 18px;
color: ${props => props.liked ? '#4267b2' : 'white' };
margin: 5px auto;
`;

export const Title = styled.p`
font-size: 15px;
color: #444;
text-align: center;
`;