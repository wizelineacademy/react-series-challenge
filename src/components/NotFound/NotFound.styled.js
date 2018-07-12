import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
    width: 100%;
    text-align: center;
`;

const NotFoundTitle = styled.h1`
    font-size: 8rem;
    font-weight: 300;
    line-height: 1.2;
    color: #E93D44;
`;

const LinksContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    text-align: center;
`;

const LinkBtn = styled(Link)`

    display: block;
    color: #E93D44;
    font-size: 14px;
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 2px solid #E93D44;
    
`;

export { NotFoundContainer, NotFoundTitle, LinksContainer, LinkBtn };