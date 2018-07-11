import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('will work', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
  it('should change dark theme', () => {
    const app = shallow(<App />);
    app.find('button').simulate('click');
    const darkTheme = {
	  bg: '#1d1f27',
	  cardColor: '#61dafb',
	  textColor: 'white',
	}
	const expectedState = {
		isDark: true,
		theme: darkTheme,
	}
    expect(app.state('isDark')).toEqual(expectedState.isDark);
    expect(app.state('theme')).toEqual(expectedState.theme);
  });
  it('should change normal theme', () => {
    const app = shallow(<App />);
    app.find('button').simulate('click');
    app.find('button').simulate('click');
    const normaTheme = {
		bg: 'white',
		cardColor: '#61dafb',
		textColor: 'black',
	}
	const expectedState = {
		isDark: false,
		theme: normaTheme,
	}
    expect(app.state('isDark')).toEqual(expectedState.isDark);
    expect(app.state('theme')).toEqual(expectedState.theme);
  });
});
