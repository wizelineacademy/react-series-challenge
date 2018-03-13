import React from 'react';
import { Image, Message, Page } from '../../styledComponents';
import notFoundImage from '../../assets/images/notFound.gif';

const View = (props) => {
  return (
    <Page>
      <Message>
        Title
        <p>
          This Gif description
        </p>
      </Message>
      <Image
        alt="notFound"
        size="50%"
        src="https://media.giphy.com/media/26xBGd4ho9zZptWbC/giphy.gif"
      />
    </Page>
  );
};

export default View;
