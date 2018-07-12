import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesList } from '../components/FavoritesList';


const gift={"url": "https://media1.giphy.com/media/PrASdleOrnZ9C/giphy-preview.gif",
  "id": "PrASdleOrnZ9C",
  "name": "awake wake up GIF by Internet Cat Video Festival",}


describe('test', () => {
  it('will work', () => {
    const component = shallow(<FavoritesList 
                                gifts={{gift,gift,gift,gift,gift,gift}}/>);
    expect(component).toMatchSnapshot();
  });
});
