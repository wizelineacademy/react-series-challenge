import React from 'react';
import { 
  GridLayout,
  mapStateToProps , 
  mapDispatchToProps 
} from '../../src/layouts/GridLayout';
import { shallow, mount } from 'enzyme';
import store from '../../src/store';
import { Provider } from 'react-redux';
import MockRouter from 'react-mock-router';

// import sinon from 'sinon';

describe('GridLayout --',() => {
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

  test('GridLayout shallow mounts ', () => {
 
    const wrapper = shallow(<GridLayout {...genProps} />);
    const inst = wrapper.instance()
    expect(inst).toBeInstanceOf(GridLayout);
  });

  test('GridLayout mounts ', () => {
 
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...genProps} />
      </MockRouter>
    </Provider>
    );
    const inst = wrapper.find(GridLayout);
    expect(inst).toHaveLength(1);
  });

  test('GridLayout onSelect ', () => {
    const thisProps ={
      ...genProps,
      history:{ 
        replace : jest.fn(),
        location: {}
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    layout.instance().handleOnSelect("dimmyID") 
    expect(thisProps.fetchDetails.mock.calls).toHaveLength(1);
    expect(thisProps.fetchDetails.mock.calls[0][0]).toEqual('dimmyID');
    expect(thisProps.history.replace.mock.calls).toHaveLength(1);
    expect(thisProps.history.replace.mock.calls[0][0]).toEqual({"search": "?details=dimmyID"});
  });

  test('GridLayout closeModal ', () => {
    const thisProps ={
      ...genProps,
      history:{ 
        replace : jest.fn(),
        location: {}
      }
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    layout.instance().closeModal();
    expect(thisProps.hideModal.mock.calls).toHaveLength(1);
    expect(thisProps.history.replace.mock.calls).toHaveLength(1);
    expect(thisProps.history.replace.mock.calls[0][0]).toEqual({"search": ""});
  });

  test('GridLayout handleFavClick ', () => {
    const thisProps ={
      ...genProps,
      history:{ 
        replace : jest.fn(),
        location: {}
      }
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    layout.instance().handleFavClick({data:'hello'});
    expect(thisProps.toggleFavoritesReq.mock.calls).toHaveLength(1);
    expect(thisProps.toggleFavoritesReq.mock.calls[0][0]).toEqual({data:'hello'});
  });

  test('GridLayout getGridData Favs ', () => {
    const thisProps ={
      ...genProps,
      match:{ params:{ view:'favorites'}},
      favorites: {
        isLoading: false,
        favorites:[{
          isFav: false,
          id:"3oEduXtXta9onVDlIc",
          images: {
            preview_gif: 'myPreview',
            downsized_large: 'MyLargeImage'
          },
          title :"sad dog GIF by The BarkPost "
        }],
        errorMessage: ''
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    const data = layout.instance().getGridData();
    expect(data).toEqual(thisProps.favorites.favorites);

  });


  test('GridLayout getGridData trending ', () => {
    const thisProps ={
      ...genProps,
      match:{ params:{ view:'trending'}},
      favorites: {
        isLoading: false,
        giphyArray:[{
          isFav: false,
          id:"3oEduXtXta9onVDlIc",
          images: {
            preview_gif: 'myPreview',
            downsized_large: 'MyLargeImage'
          },
          title :"sad dog GIF by The BarkPost "
        }],
        errorMessage: ''
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    const data = layout.instance().getGridData();
    expect(data).toEqual(thisProps.trending.giphyArray);

  });
  

  test('GridLayout getGridData trending ', () => {
    const thisProps ={
      ...genProps,
      match:{ params:{ view:'search'}},
      search: {
        isLoading: false,
        giphyArray:[{
          isFav: false,
          id:"3oEduXtXta9onVDlIc",
          images: {
            preview_gif: 'myPreview',
            downsized_large: 'MyLargeImage'
          },
          title :"sad dog GIF by The BarkPost "
        }],
        errorMessage: ''
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    const data = layout.instance().getGridData();
    expect(data).toEqual(thisProps.search.giphyArray);

  });


  test('GridLayout Props changes and Search ', () => {
    const thisProps ={
      ...genProps,
      match:{ params:{ view:'search'},
      url:''
      },
      search: { 
        isLoading: false,
        giphyArray:[{
          isFav: false,
          id:"3oEduXtXta9onVDlIc",
          images: {
            preview_gif: 'myPreview',
            downsized_large: 'MyLargeImage'
          },
          title :"sad dog GIF by The BarkPost "
        }],
        errorMessage: ''
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    const NewProps = { match:{ params:{ view:'search', searchTerm: 'searchme'},
    url:'search'
    } };
    wrapper.setProps(NewProps);
    layout.instance().componentWillReceiveProps(NewProps);
    expect(thisProps.searchRequest.mock.calls.length).toEqual(1);
    expect(thisProps.searchRequest.mock.calls[0][0]).toEqual('searchme');
  });

  
  test('GridLayout Props changes ', () => {
    const thisProps ={
      ...genProps,
      trendingRequest: jest.fn(),
      match:{ params:{ view:'search'},
      url:''
      },
      search: { 
        isLoading: false,
        giphyArray:[{
          isFav: false,
          id:"3oEduXtXta9onVDlIc",
          images: {
            preview_gif: 'myPreview',
            downsized_large: 'MyLargeImage'
          },
          title :"sad dog GIF by The BarkPost "
        }],
        errorMessage: ''
      },
    }
    const wrapper = mount(
    <Provider store= { store }>
      <MockRouter>
        <GridLayout {...thisProps} />
      </MockRouter>
    </Provider>
    );
    const layout = wrapper.find(GridLayout);
    const NewProps = { match:{ params:{ view:'trending', searchTerm: ''},
    url:'trending'
    } };
    wrapper.setProps(NewProps);
    layout.instance().componentWillReceiveProps(NewProps);
    expect(thisProps.trendingRequest.mock.calls.length).toEqual(1);
  });
  

  test('SearchComponent mapStateToProps', () => {
    const mockState = {
      search: 'search', 
      unknown: 'test',
      trending: 't',
      favorites: 'fav',
      modal: 'mod',
      details: 'details',
      match:{}
    };
    let props = mapStateToProps(mockState);
    expect(props.search).toBeTruthy();
    expect(props.trending).toBeTruthy();
    expect(props.favorites).toBeTruthy();
    expect(props.modal).toBeTruthy();
    expect(props.details).toBeTruthy();
    expect(props.unknown).toBeFalsy();
    expect(Object.keys(props)).toHaveLength(5);

  });

  test('GridLayout  mapDispatchToProps ', () => {
    const mockDispatch = jest.fn();
    let props = mapDispatchToProps(mockDispatch);
    expect(props.searchRequest).toBeTruthy();
    expect(props.trendingRequest).toBeTruthy();
    expect(props.toggleFavoritesReq).toBeTruthy();
    expect(props.loadFavorites).toBeTruthy();
    expect(props.hideModal).toBeTruthy();
    expect(props.showModal).toBeTruthy();
    expect(props.fetchDetails).toBeTruthy();
    expect(Object.keys(props)).toHaveLength(7);
  });

})