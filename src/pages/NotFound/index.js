import React from 'react';
import { Image, Message, Page } from '../../styledComponents';
import notFoundImage from '../../assets/images/notFound.gif';

const NotFound = (props) => {
  return (
    <Page>
      <Message>
        NotFound
        <p>
          Please go back to the home page and find some Gifs
        </p>
      </Message>
      <Image
        alt="notFound"
        size="50%"
        src={notFoundImage}
      />
    </Page>
  );
};

export default NotFound;
