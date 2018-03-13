import React from 'react';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Message, Page } from '../../styledComponents';

const Home = (props) => {
  return (
    <Page>
      <Message>
        Hello!
        <p>
          These are the most popular GIFs!
        </p>
        <p>
          Visit your Favorites&ensp;
          <Link
            to="/favorites"
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

export default Home;
