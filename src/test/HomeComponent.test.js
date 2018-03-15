import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import {Home, mapStateToProps} from '../component/Home'

describe('Test for Home Component', () => {
  const shallowOptions = {
    disableLifecycleMethods: true
  }

  it('show loading message', () => {
    const props = {
      giphys: [],
      favorites: {}
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.text()).to.be.equal('Loading...........')
  })

  it('shows SearchBar component', () => {
    const props = {
      giphys: [{
        id: "dummyId",
        images: {
          fixed_width: {
            url: "https://dummyUrl.com",
          }
        },
        title: "dummyTitle"
      }],
      favorites : {}
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('SearchBar')).lengthOf(1)
  })

  it('shows ListGimphy component', () => {
    const props = {
      giphys: [{
        id: "dummyId",
        images: {
          fixed_width: {
            url: "https://dummyUrl.com",
          }
        },
        title: "dummyTitle"
      }],
      favorites : {}
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('ListGimphy')).lengthOf(1)
  })

  it('shows listGiphy map all giphys list to ListGimphy component', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        },
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {}
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('ListGimphy')).lengthOf(2)
  })

  it('evaluates props pass searchBar component', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {}
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('SearchBar').props()).to.have.all.keys('searchFunction','placeholder')
  })

  it('evaluates props pass ListGimphy component', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {}
    }
    const expectedProps = [
      'gimphyId', 'title', 'url', 'selected', 'handleOnclick', 'showDetailButton'
    ]
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('ListGimphy').props()).to.have.all.keys(expectedProps)
  })

  it('evaluates call to searchOnWeb Onchange event from SearchBar', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {},
      searchOnWeb: (query) => query,
      fetchTrend: () => null
    }
    const dummyEvent = {
      target:{
        value: 'dummyQuery'
      }
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(
      component.find('SearchBar').shallow().find('.input').simulate('change', dummyEvent)
    ).to.be.equal(undefined)
  })

  it('evaluates call to fetchTrend Onchange event from SearchBar', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {},
      searchOnWeb: (query) => query,
      fetchTrend: () => null
    }
    const dummyEvent = {
      target:{
        value: ''
      }
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(
      component.find('SearchBar').shallow().find('.input').simulate('change', dummyEvent)
    ).to.be.equal(undefined)
  })

  it('evaluates call to addFavorite Onclick event from ListGimphy', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {},
      addFavorite: giphy => giphy,
      deleteFavorite: giphy => giphy
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(
      component.find('ListGimphy').shallow().find('.img').simulate('click','dummyId')
    ).to.be.equal(undefined)
  })

  it('evaluates call to deleteFavorite Onclick event from ListGimphy', () => {
    const props = {
      giphys: [
        {
          id: "dummyId",
          images: {
            fixed_width: {
              url: "https://dummyUrl.com",
            }
          },
          title: "dummyTitle"
        }
      ],
      favorites : {dummyId: {}},
      addFavorite: giphy => giphy,
      deleteFavorite: giphy => giphy
    }
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(
      component.find('ListGimphy').shallow().find('.img').simulate('click','dummyId')
    ).to.be.equal(undefined)
  })

  it('evaluates call to fetchTrend on componentDidMount', () => {
    const props = {
      giphys: [],
      favorites : {},
      fetchTrend: () => null,
    }
    const component = shallow(<Home {...props} />)
    expect(component).lengthOf(1)
  })

  it('evaluates mapStateToProps', () => {
    const state = {
      gimphyList: {giphys: 'gimphyList'},
      favorites: 'favorites',
    }
    const expectedMap = {
      giphys: 'gimphyList',
      favorites: 'favorites',
    }
    expect(mapStateToProps(state)).to.be.deep.equal(expectedMap)
  })
})