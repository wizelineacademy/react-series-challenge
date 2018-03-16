import {simplifyGIFObject} from "../index";

const hugeObject = {
  id: 'An id',
  images: {
    downsized_large: {
      url: 'A original url'
    },
    fixed_width_downsampled: {
      url: 'A small url'
    }
  },
  title: 'A Title',
  unusedProperty: 'Remove me'
};

const smallObject = {
  id: 'An id',
  images: {
    original: 'A original url',
    small: 'A small url'
  },
  title: 'A TITLE'
};

describe('Sagas util', () => {
  it('should simplify the request', () => {
    expect(simplifyGIFObject(hugeObject)).toEqual(smallObject);
  });
});
