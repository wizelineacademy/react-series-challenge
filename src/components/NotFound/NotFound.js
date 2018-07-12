import React from 'react';
import { NotFoundContainer, NotFoundTitle, LinksContainer, LinkBtn } from "./NotFound.styled";

const NotFound = (props) => {


    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>

            <p>Page not Found!</p>

            <LinksContainer>
                <LinkBtn to="/trending"> <i className="fas fa-home" /> </LinkBtn>
                <LinkBtn to="/favorites"> Favorites </LinkBtn>
            </LinksContainer>

        </NotFoundContainer>
    );

};

export default NotFound;