import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import {Favorites} from '../src/component/Favorites'

describe('Test Favorites component', () => {
  const shallowOptions = {
    disableLifecycleMethods: true
  }

  it('show empty favorites message', () => {
    const props = {
      favorites: {}
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    expect(component.text()).to.be.equal('Your favorites list is empty...')
  })

  it('shows SearchBar component', () => {
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }}
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    expect(component.find('SearchBar')).lengthOf(1)
  })

  it('shows ListGiphy component', () => {
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }}
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    expect(component.find('ListGimphy')).lengthOf(1)
  })

  it('evaluates call to handleSearch Onchange event from SearchBar regex true', () => {
    const dummyEvent = {
      target:{
        value: 'DUMMY'
      }
    }
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }}
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    component.find('SearchBar').shallow().find('.input').simulate('change', dummyEvent)
    expect(component.state('favorites')).to.be.deep.equal(props.favorites)
  })

  it('evaluates call to handleSearch Onchange event from SearchBar regex false', () => {
    const dummyEvent = {
      target:{
        value: 'NOfound'
      }
    }
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }}
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    component.find('SearchBar').shallow().find('.input').simulate('change', dummyEvent)
    expect(component.state('favorites')).to.be.deep.equal({})
  })

  it('evaluates call to deleteFavorite Onclick event from ListGimphy', () => {
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }},
      deleteFavorite: giphy => giphy
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    expect(
      component.find('ListGimphy').shallow().find('.img').simulate('click','dummyId')
    ).to.be.equal(undefined)
  })

  it('evaluates call to componentWillReceiveProps', () => {
    const nextPros = {
      favorites: {}
    }
    const props = {
      favorites : {dummyId: {
        id: 'dummyId',
        title: 'dummyTitle',
        images: {
          fixed_width: {
            url: 'https://dummyUrl.com'
          }
        }
      }},
    }
    const component = shallow(<Favorites {...props}/>, shallowOptions)
    component.setProps(nextPros)
    expect(component.state('favorites')).to.be.deep.equal(nextPros.favorites)
  })

})