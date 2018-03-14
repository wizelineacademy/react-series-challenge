
import React from 'react';
import { Wrapper , LabelStyled , InputStyled } from './FavBox.styled';
export const FavBox = ( { checked, onClick, id }) => {
  let text = (checked) ? 'Remove From Favs' : 'Add to Favs'
  return (
    <Wrapper>
      <InputStyled checked={ checked } id={ id } type="checkbox" onChange={ onClick } />
      <LabelStyled htmlFor={ id }>{text}</LabelStyled>
    </Wrapper>
  )
}

