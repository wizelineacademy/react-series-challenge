import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainNav from '../NavMain';
import { MainHeaderStyled } from "./MainHeader.styled";

const MainHeader = props => (
    <MainHeaderStyled>
        <MainNav />
    </MainHeaderStyled>

);

export default MainHeader;