import styled from 'styled-components'

const Navbar = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 15px;
    -webkit-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    -moz-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 40%;
`;

const Logo = styled.img`
    max-width: 50px;
`;

const SearchContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 60%;
    text-align: right;
`;

export {
    Navbar,
    LogoContainer,
    Logo,
    SearchContainer,
};