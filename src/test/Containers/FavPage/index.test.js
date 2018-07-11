import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {addFav,withdrawFav} from '../../../Containers/FavPage/action'
import {createStore} from 'redux'
import reducers from '../../../Containers/FavPage/reducer'
import ConnectedFavPage,{FavPage, render} from '../src/js/components/Home'

// Snapshot for Home React Component
describe('FAVPAGE works --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<FavPage />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
//*******************************************************************************************************
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<FavPage output={output}/>)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedFavPage store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('output')).toEqual(initialState.output)
    });

});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedFavPage /></Provider> )
    })

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedFavPage).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(FavPage).prop('output')).toEqual(initialState.output)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(addFav(500))
        store.dispatch(withdrawFav(100))
        action = store.getActions()
        expect(action[0].type).toBe("ADD_FAV")
        expect(action[1].type).toBe("WITHDRAW_FAV")
    });

});
//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    let store,wrapper

    beforeEach(()=>{
        store = createStore(reducers)
        wrapper = mount( <Provider store={store}><ConnectedFavPage /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        store.dispatch(addFav(500))
       expect(wrapper.find(FavPage).prop('output')).toBe([500])
    });

});
//*******************************************************************************************************