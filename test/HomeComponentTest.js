import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import {Home} from '../src/component/Home'

describe('Test for Home Component', () => {
  const shallowOptions = {
    disableLifecycleMethods: true
  }

  it('show loading message', () => {
    const props = {
      giphys: [],
      favorites: []
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
      favorites : []
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
      favorites : []
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
      favorites : []
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
      favorites : []
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
      favorites : []
    }
    const expectedProps = [
      'gimphyId', 'title', 'url', 'selected', 'handleOnclick', 'showDetailButton'
    ]
    const component = shallow(<Home {...props}/>, shallowOptions)
    expect(component.find('ListGimphy').props()).to.have.all.keys(expectedProps)
  })

})