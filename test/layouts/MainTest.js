import React from 'react';
import { 
  MainAppLayout
} from '../../src/layouts/MainApp';
import { shallow, mount } from 'enzyme';
import store from '../../src/store';
import { Provider } from 'react-redux';
import MockRouter from 'react-mock-router';

// import sinon from 'sinon';

describe('MainAppLayout --',() => {
  const genProps = {
    search: {
      currentTerm:'',
      isLoading: false,
      giphyArray:[],
      errorMessage: ''
    }, 
    trending: {
      isLoading: false,
      giphyArray:[],
      errorMessage: ''
    },
    favorites: {
      isLoading: false,
      favorites:[],
      errorMessage: ''
    },
    modal: {
      isModalOpen: false,
      selectedGiphy: {}
    },
    details: {
      isLoading: false,
      giphy:{},
      errorMessage: ''
    },
    match:{
      params: ''
    },
    location:{ search: ''},
    searchRequest: jest.fn(),
    trendingRequest: jest.fn(),
    toggleFavoritesReq: jest.fn(),
    loadFavorites: jest.fn(),
    hideModal: jest.fn(),
    showModal: jest.fn(),
    fetchDetails: jest.fn(),
  }

  test('MainAppLayout shallow mounts ', () => {
 
    const wrapper = shallow(<MainAppLayout {...genProps} />);
    const inst = wrapper.instance()
    expect(inst).toBeInstanceOf(MainAppLayout);
  });

  test('MainAppLayout mounts ', () => {
 
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <MainAppLayout {...genProps} />
      </MockRouter>
    </Provider>
    );
    const inst = wrapper.find(MainAppLayout);
    expect(inst).toHaveLength(1);
  });

});