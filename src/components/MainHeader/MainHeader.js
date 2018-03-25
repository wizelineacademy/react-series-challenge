import React from 'react';
import MainNav from '../NavMain';
import { MainHeaderStyled } from "./MainHeader.styled";

const MainHeader = props => (
    <MainHeaderStyled>
        <MainNav />
    </MainHeaderStyled>

);

export default MainHeader;