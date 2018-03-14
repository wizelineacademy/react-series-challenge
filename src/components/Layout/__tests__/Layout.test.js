import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Layout from '../../Layout';

describe('<Layout />', () => {
  it('Layout must be rendered without crashing', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Layout>
          Content
        </Layout>
      </MemoryRouter>
    );
    expect(wrapper.find('Layout').hasClass('Layout'));
  });
});
