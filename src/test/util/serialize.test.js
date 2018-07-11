import serialize from '../../util/serialize'

it('Serialize works', () => {
    expect(serialize({test1:"test1",test2:"2"})).toBe("test1=test1&test2=2");
  });