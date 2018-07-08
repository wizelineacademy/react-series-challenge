import styled from 'styled-components'

const Navbar = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 15px;
    -webkit-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    -moz-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
`;

const MainContainer = styled.div`
    margin-top: 8rem;
    width: 100%;
    background-color: #fff;
    padding: 0 1rem 1rem;
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 40%;
`;

const SearchContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 60%;
    text-align: right;
`;

export {
    Navbar,
    MainContainer,
    LogoContainer,
    SearchContainer,
};