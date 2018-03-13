import React from 'react';
import renderer from 'react-test-renderer';

import { Loader } from '../';

describe('<Loader />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// import React from 'react';
// import renderer from 'react-test-renderer';
// import configureMockStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
// import { StaticRouter } from 'react-router-dom';
// import { Grid } from '../';
//
// const mockStore = configureMockStore();
//
// describe('<Grid />', () => {
//   const props = {
//     data: [
//       {
//         id: 'asdfljlk3-ffgfg',
//         title: 'Example image',
//         images: {
//           fixed_width_downsampled: {
//             url: 'http://www.example.com/image.jpg',
//             width: '200',
//             height: '200',
//           },
//         },
//       },
//     ],
//     toggleFavorite: jest.fn(),
//   };
//   const initialState = {
//     favorites: [],
//   };
//
//   test('renders data correctly with verified user', () => {
//     const tree = renderer.create(
//       <Provider store={mockStore(initialState)}>
//         <StaticRouter location="" context={{}}>
//           <Grid {...props} />
//         </StaticRouter>
//       </Provider>,
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
