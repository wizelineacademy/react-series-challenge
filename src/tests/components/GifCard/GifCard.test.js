import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import GifCard from '../../../components/GifCard/GifCard';
import { GifContainer, GifOverlay, GifTitle, GifOverlayLoading, Gif, FavoriteBtn } from '../../../components/GifCard/GifCard.styled';
import store from '../../../store'


describe('GifCard', () => {

    const mainGifs = {
        '9Y1KGBP9bz0NPKgm0C': {
            type: "gif",
            id: "xT0xelIcrwVocTirvO",
            slug: "willandgrace-will-and-grace-xT0xelIcrwVocTirvO",
            url: "https://giphy.com/gifs/willandgrace-will-and-grace-xT0xelIcrwVocTirvO",
            bitly_gif_url: "https://gph.is/2jpQR3t",
            bitly_url: "https://gph.is/2jpQR3t",
            embed_url: "https://giphy.com/embed/xT0xelIcrwVocTirvO",
            username: "willandgrace",
            source: "",
            content_url: "",
            source_tld: "",
            source_post_url: "",
            is_sticker: 0,
            import_datetime: "2017-11-26 17:34:50",
            trending_datetime: "2018-05-25 06:00:01",
            images: {
                original: {
                    url: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.gif",
                    width: "455",
                    height: "455",
                    size: "1875522",
                    frames: "16",
                    mp4: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.mp4",
                    mp4_size: "398093",
                    webp: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.webp",
                    webp_size: "713304",
                    hash: "59f44cc8fbabdf1e66b7c094080529b7"
                },
            }
        }
    };

    beforeAll(() => {
        global.localStorage = {
            getItem: function (any = null) {
                return JSON.stringify({"9Y1KGBP9bz0NPKgm0C":"9Y1KGBP9bz0NPKgm0C","2rACoX3oXJX1kZceZZ":"2rACoX3oXJX1kZceZZ"});
            }
        };
    });

    it('should render without problems', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <GifCard gif={mainGifs}/>
            </Provider>
        );
        wrapper.setProps({ gif: mainGifs });
        expect(wrapper).toMatchSnapshot();
    });

    it('should pass all styled components', () => {
        const gifContainerTree = shallow(<GifContainer/>);
        expect(gifContainerTree).toHaveStyleRule('position', 'relative');

        const gifOverlayTree = shallow(<GifOverlay />);
        expect(gifOverlayTree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.0)');

        const gifTitleTree = shallow(<GifTitle />);
        expect(gifTitleTree).toHaveStyleRule('visibility', 'hidden');

        const gifOverlayLoadinTree = shallow(<GifOverlayLoading />);
        expect(gifOverlayLoadinTree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.9)');

        const gifTree = shallow(<Gif />);
        expect(gifTree).toHaveStyleRule('max-height', '150px');

        const favoriteBtnTree = shallow(<FavoriteBtn />);
        expect(favoriteBtnTree).toHaveStyleRule('visibility', 'hidden');
    });

});
