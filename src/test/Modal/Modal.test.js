import React from 'react';
import { shallow } from 'enzyme';
import { AddGiftModal } from '../../components/Modal/AddGiftModal';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<AddGiftModal isModalOpen={true} gift={{"url":"cdcdxs", "name":"dcdjc"}} favorites={{"cdcd":"dcdcd"}}/>);
    expect(component).toMatchSnapshot();
  });
});
