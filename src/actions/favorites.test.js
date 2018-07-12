import { toggleFavoriteGif } from './favorites';

describe('giphyApi Actions', () => {
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

  test('toggleFavoriteGif', () => {
    expect(toggleFavoriteGif(mockGifData)).toMatchSnapshot();
  });
})