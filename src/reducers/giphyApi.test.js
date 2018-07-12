import reducer from './favorites';
import { toggleFavoriteGif } from '../actions/favorites'
import { receiveNextPageTrendingGifs, receiveTrendingGifs } from '../actions/giphyApi';

describe('giphyApi reducer', () => {
  const mockPastGifsData = {
    '898DSAjdsa90asdas09': {
      "type": "gif",
      "id": "898DSAjdsa90asdas09",
      "slug": "ella-mai-up-898DSAjdsa90asdas09",
      "images": {
        "fixed_width": {
          "url": "https://media2.giphy.com/media/898DSAjdsa90asdas09/200w.gif",
          "width": "200",
          "height": "112",
          "size": "739715",
          "mp4": "https://media2.giphy.com/media/898DSAjdsa90asdas09/200w.mp4",
          "mp4_size": "142753",
          "webp": "https://media2.giphy.com/media/898DSAjdsa90asdas09/200w.webp",
          "webp_size": "265118"
        }
      }
    }
  };
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
  const mockGifData = {
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
    }
  };

  test('receiveTrendingGifs', () => {
    const mockAction = receiveTrendingGifs(mockGifsData);

    expect(reducer(undefined, mockAction)).toMatchSnapshot();
  });

  test('toggleFavoriteGif', () => {
    const mockAction = toggleFavoriteGif(mockGifData);

    expect(reducer(mockGifsData, mockAction)).toMatchSnapshot();
  });

  test('receiveNextPageTrendingGifs', () => {
    const mockAction = receiveNextPageTrendingGifs(mockGifsData);

    expect(reducer(mockPastGifsData, mockAction)).toMatchSnapshot();
  });
})