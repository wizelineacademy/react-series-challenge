
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`

max-width:100%;
height:auto;
`

const LikeIcon = styled.i`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    color:${props=>props.isFavorite ? 'red':'grey'};
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    cursor:pointer;
`

const Box = styled.div`
cursor:pointer;
text-align:center;
vertical-align:top;
width:20%;
height:auto;
margin:0;
border: 1px solid #ddd;
border-radius: 4px;
padding: 5px;
display:inline-block;
flex-direction:column;
justify-content:center;
align-items:center;
transition:0.5s all;
&:hover{
    box-shadow: 2px 2px 2.5px 0px rgba(0,0,0,0.4);
}
`
const Gif = ({src,isFavorite})=>{
    return(
        <Box>
            <Image src={src}/>
            <LikeIcon isFavorite={isFavorite}>favorite</LikeIcon>
        </Box>
    )
}

export default Gif