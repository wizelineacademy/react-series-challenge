import {StyledNotFound} from './NotFoundPage.styled';
import React from 'react';

const NotFoundPage = (props) => {
    return(
        <StyledNotFound {...props}>
            <h1>Nothing to see here! Go HOME and search some awesome gifs!</h1>
        </StyledNotFound>
    )
}

export default NotFoundPage;