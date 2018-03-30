import React from 'react';
import { shallow, mount } from 'enzyme';
import Details from '../components/details';
import store from '../store';


const testProps = {
  match: {
    params: {
      id: 'fZLdJsdeFLNM4'
    }
  }
}

describe('test Details Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<Details store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  })
  it('check one Action', () => {
    const details = {
      detailsImage: { 
        id: 'fZLdJsdeFLNM4'
      }
    }
    const renderedComponent = mount(<Details store={store} details={details} { ...testProps } />);
    const { id } = renderedComponent.props().details.detailsImage;
    expect(id).toBe('fZLdJsdeFLNM4');
  })
})