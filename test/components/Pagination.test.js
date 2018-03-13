import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Pagination from '../../src/components/Pagination';

describe('Pagination', () => {
  let props;
  beforeEach(() => {
    props = {
      pagination: {
        offset: 15,
        total_count: 100,
        count: 5
      },
      searchTerm: 'searchTerm',
      searchGifs: jest.fn(),
      getTrendingGifs: jest.fn(),
    }
  })

  it('should render seven diferent pagination buttons', () => {
    const tree = renderer
    .create(
      <Pagination {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render four diferent pagination buttons if in first page', () => {
    props.pagination.offset = 0;
    const tree = renderer
    .create(
      <Pagination {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render four diferent pagination buttons if in last page', () => {
    props.pagination.offset = 95;
    const tree = renderer
    .create(
      <Pagination {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render call searchGifs callback if a pagination button is clicked', () => {
    const output = shallow(
      <Pagination {...props} />
    );
    expect(props.searchGifs.mock.calls.length).toBe(0);
    output.find('div').childAt(0).simulate('click');
    output.find('div').childAt(1).simulate('click');
    output.find('div').childAt(2).simulate('click');
    output.find('div').childAt(4).simulate('click');
    output.find('div').childAt(5).simulate('click');
    output.find('div').childAt(6).simulate('click');
    expect(props.searchGifs.mock.calls.length).toBe(6);
  });

  it('should render call getTrendingGifs callback if a pagination button is clicked and there is no searchTerm', () => {
    props.searchTerm = null;
    const output = shallow(
      <Pagination {...props} />
    );
    expect(props.getTrendingGifs.mock.calls.length).toBe(0);
    output.find('div').childAt(0).simulate('click');
    output.find('div').childAt(1).simulate('click');
    output.find('div').childAt(2).simulate('click');
    output.find('div').childAt(4).simulate('click');
    output.find('div').childAt(5).simulate('click');
    output.find('div').childAt(6).simulate('click');
    expect(props.getTrendingGifs.mock.calls.length).toBe(6);
  });

  it('should not render if there is no pagination object', () => {
    const tree = renderer
    .create(
      <Pagination pagination={null} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should not render if there is only one page in pagination', () => {
    props.pagination = {};
    const tree = renderer
    .create(
      <Pagination {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});