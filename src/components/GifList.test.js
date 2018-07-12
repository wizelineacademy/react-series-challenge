import React from 'react';
import { shallow } from 'enzyme';
import { FullWidthGif, GifCard, GifsRow, GifTitle, LikeButton } from './GifList.styled';
import GifList from './GifList';

describe('GifList', () => {
  test('FullWidthGif', () => {
    const headerComponent = shallow(<FullWidthGif />);
    expect(headerComponent).toMatchSnapshot();
  });

  test('GifCard', () => {
    const logoImageComponent = shallow(<GifCard />);
    expect(logoImageComponent).toMatchSnapshot();
  });

  test('GifsRow', () => {
    const logoTextComponent = shallow(<GifsRow />);
    expect(logoTextComponent).toMatchSnapshot();
  });

  test('GifTitle', () => {
    const navLinksComponent = shallow(<GifTitle />);
    expect(navLinksComponent).toMatchSnapshot();
  });

  test('LikeButton', () => {
    const navTabComponent = shallow(<LikeButton to="/" />);
    expect(navTabComponent).toMatchSnapshot();
  });

  test("GifList", () => {
    const mockGifsData = {
      '8FMLOqBX3TwBxnKbrA': {
        "type": "gif",
        "id": "8FMLOqBX3TwBxnKbrA",
        "slug": "ellamai-ella-mai-bood-up-8FMLOqBX3TwBxnKbrA",
      "images": {
        "fixed_width": {
          "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.gif",
          "width": "200",
          "height": "112",
          "size": "739715",
          "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.mp4",
          "mp4_size": "142753",
          "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.webp",
          "webp_size": "265118"
        }
      }
    },
    "7vzoRu05YJp2pFMd24": {
      "type": "gif",
      "id": "7vzoRu05YJp2pFMd24",
      "slug": "ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
      "images": {
        "fixed_width": {
          "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.gif",
          "width": "200",
          "height": "112",
          "size": "361247",
          "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.mp4",
          "mp4_size": "68902",
          "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.webp",
          "webp_size": "122550"
        }
      }
    }
  };

    const gifListComponent = shallow(<GifList />);
    expect(gifListComponent.find('h4')).toHaveLength(1);
    gifListComponent.setProps({gifs: mockGifsData});
    expect(gifListComponent).toMatchSnapshot();
  })
})