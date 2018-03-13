import React from 'react';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Message, Page } from '../../styledComponents';

const Favorites = (props) => {
  return (
    <Page>
      <Message>
        The best of the best!
        <p>
          These are the most popular GIFs!
        </p>
        <p>
          Go back to trend GIFs&ensp;
          <Link
            to="/"
          >
            here!
          </Link>
        </p>
      </Message>
      <div>
        <GifList />
      </div>
    </Page>
  );
};

export default Favorites;
