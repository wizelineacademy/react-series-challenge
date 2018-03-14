import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import {Detail} from '../src/component/Detail'

describe('Test Detail component', () => {
  const shallowOptions = {
    disableLifecycleMethods: true
  }

  it('shows giphyDetails empty message', () => {
    const props = {
      giphyDetails : {},
      favorites: {}
    }
    const component = shallow(<Detail {...props}/>, shallowOptions)
    expect(component.text()).to.be.equal('Oops, It seems that this giphy does not exist!')
  })

  it('shows ListGimphy component', () => {
    const props = {
      giphyDetails: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      },
      favorites: {}
    }
    const component = shallow(<Detail {...props}/>, shallowOptions)
    expect(component.find('ListGimphy')).lengthOf(1)
  })

  it('evaluates call to deleteFavorite Onclick event from ListGimphy', () => {
    const props = {
      giphyDetails: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      },
      favorites: {dummyId : {id: 'dummyId', title: 'dummyTitle'}},
      deleteFavorite: giphy => giphy
    }
    const component = shallow(<Detail {...props}/>, shallowOptions)
    expect(
      component.find('ListGimphy').shallow().find('.img').simulate('click','dummyId')
    ).to.be.equal(undefined)
  })

  it('evaluates call to addFavorite Onclick event from ListGimphy', () => {
    const props = {
      giphyDetails: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      },
      favorites: {},
      addFavorite: giphy => giphy
    }
    const component = shallow(<Detail {...props}/>, shallowOptions)
    expect(
      component.find('ListGimphy').shallow().find('.img').simulate('click','dummyId')
    ).to.be.equal(undefined)
  })

  it('evaluates call to componentDidMount', () => {
    const props = {
      giphyDetails: {},
      favorites: {},
      fetchDetails: () => null,
      match: {params: 'dummyId'}
    }
    const component = shallow(<Detail {...props}/>)

    expect(component).lengthOf(1)
  })
 
})