import { styleGetter } from '../../components/helpers';

describe('styleGetter', () => {
  it('returns the value of the path on the given object', () => {
    const path = 'a.b.c';
    const obj = {
      a: {
        b: {
          c: 42
        }
      }
    };

    expect(styleGetter(path)(obj)).toEqual(42);
  });
});
