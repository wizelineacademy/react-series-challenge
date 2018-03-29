import React from 'react'
import styled from 'styled-components'

const Image = styled.div`

width:600px;
background-size:cover;
background-image:url(${props=>props.src});
height:600px;
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

const Box = styled.a`
cursor:pointer;
text-align:center;
background-color:#fff;
vertical-align:top;
width:auto;
height:auto;
margin:0;
border: 1px solid #ddd;
border-radius: 4px;
padding: 5px;
display:inline-block;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Gif = ({src,isFavorite, onClickIcon, data})=>{
    return(
        <Box>
            <Image src={src}/>
            <LikeIcon isFavorite={isFavorite} onClick={()=>{
               onClickIcon(data)
            }}>favorite</LikeIcon>
        </Box>
    )
}

export default Gif