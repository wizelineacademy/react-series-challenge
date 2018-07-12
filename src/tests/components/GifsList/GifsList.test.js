import React from 'react';
import GifsList from '../../../components/GifsList/GifsList';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store'

describe('GifsList', () => {

    beforeAll(() => {
        global.localStorage = {
            getItem: function (any = null) {
                return JSON.stringify({"9Y1KGBP9bz0NPKgm0C":"9Y1KGBP9bz0NPKgm0C","2rACoX3oXJX1kZceZZ":"2rACoX3oXJX1kZceZZ"});
            }
        };
    });

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

    const secondaryGifs = {};

    it('should render with no problems', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <GifsList mainGifs={mainGifs} secondaryGifs={secondaryGifs} />
            </Provider>
        );

        wrapper.setProps({ secondaryGifs, mainGifs });
        expect(wrapper).toMatchSnapshot();
    });

    it('should be choosing mainGifs instead of secondaryGifs', () => {
        const wrapper = mount(
            <Provider store={store}>
                <GifsList mainGifs={mainGifs} secondaryGifs={secondaryGifs} />
            </Provider>
        );

        expect(wrapper.props().children.props.mainGifs).toEqual(mainGifs);
        expect(wrapper.props().children.props.secondaryGifs).toEqual(secondaryGifs)
    });


    it('should be choosing secondaryGifs instead of mainGifs', () => {
        const wrapper = mount(
            <Provider store={store}>
                <GifsList mainGifs={mainGifs} secondaryGifs={secondaryGifs}/>
            </Provider>
        );

        wrapper.setProps({ mainGifs, secondaryGifs});

        expect(wrapper.props().children.props.mainGifs).toEqual(mainGifs);
        expect(wrapper.props().children.props.secondaryGifs).toEqual(secondaryGifs);

        wrapper.setProps({ mainGifs, secondaryGifs});

        expect(wrapper.props().children.props.mainGifs).toEqual(mainGifs);
        expect(wrapper.props().children.props.secondaryGifs).toEqual(secondaryGifs)
    });

});
