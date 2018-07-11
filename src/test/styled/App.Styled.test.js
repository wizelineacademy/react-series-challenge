import React from 'react';
import { render } from 'enzyme';
import { AppStyled } from '../../styled/AppStyled.Styled';

describe('App style', () => {
	it('App style should work', () => {
		const ci = render(<AppStyled />);
		expect(ci).toMatchSnapshot();
	})
});