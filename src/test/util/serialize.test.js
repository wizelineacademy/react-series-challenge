import serialize from '../../util/serialize'

it('Serialize works', () => {
    expect(serialize({test1:"test1",test2:"2"})).toEqual("test1=test1&test2=2");
  });