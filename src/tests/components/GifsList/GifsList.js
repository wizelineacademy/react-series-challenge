import React from 'react';
import GifsList from '../../../components/GifsList/GifsList';
import renderer from 'react-test-renderer';

const mainGifs = {
    '9Y1KGBP9bz0NPKgm0C': {
        type: "gif",
        id: "9Y1KGBP9bz0NPKgm0C",
        slug: "animation-art-black-and-white-9Y1KGBP9bz0NPKgm0C",
        url: "https://giphy.com/gifs/animation-art-black-and-white-9Y1KGBP9bz0NPKgm0C",
        bitly_gif_url: "https://gph.is/2J6OFtJ",
        bitly_url: "https://gph.is/2J6OFtJ",
        embed_url: "https://giphy.com/embed/9Y1KGBP9bz0NPKgm0C",
        username: "dylanreitz"
    }
};

const secondaryGifs = {};

describe('GifsList', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(<GifsList mainGifs={mainGifs} secondaryGifs={secondaryGifs} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
