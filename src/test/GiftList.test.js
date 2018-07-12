import React from 'react';
import { shallow } from 'enzyme';
import { GiftList } from '../components/GiftList';


const gift={"images":{"preview_gif":{
                   "url": "https://media1.giphy.com/media/PrASdleOrnZ9C/giphy-preview.gif",
                   "width": "210",
                   "height": "130",
                   "size": "48728"
                    },
          },
  "id": "PrASdleOrnZ9C",
  "title": "awake wake up GIF by Internet Cat Video Festival",}


describe('test', () => {
  it('will work', () => {
    const component = shallow(<GiftList 
                                gifts={[gift,gift,gift,gift,gift,gift]}/>);
    expect(component).toMatchSnapshot();
  });
  // it('will fail', () => {
  //   const component = shallow(<GiftList 
  //                               gifts={[gift,gift,gift]}/>);
  //   expect(component).toThrowError('Not Found');
  // });
});
