import React from 'react'
import { shallow, mount } from 'enzyme';
import ConnectedHome,{HomePage} from '../../../Containers/HomePage'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {addInputs,subtractInputs} from '../../../Containers/HomePage/action'
import {createStore} from 'redux'
import calculatorReducers from '../../../Containers/HomePage/reducer'

// Snapshot for Home React Component
describe('>>>H O M E --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<Home />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
//*******************************************************************************************************
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<HomePage />)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains button with id="add"', () => {
        expect(wrapper.find('img').type()).toEqual('img')
    });
});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedHome store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });


});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })

    it('+++ contains header - h2', () => {
        expect(wrapper.contains(<h2>using React and Redux</h2>)).toBe(true)
    });

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedHome).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(addInputs(500))
        store.dispatch(subtractInputs(100))
        action = store.getActions()
        expect(action[0].type).toBe("ADD_INPUTS")
        expect(action[1].type).toBe("SUBTRACT_INPUTS")
    });

});
//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    const initialState = {output:10}
    let store,wrapper

    beforeEach(()=>{
        store = createStore(calculatorReducers)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        store.dispatch(addInputs(500))
       expect(wrapper.find(Home).prop('output')).toBe(500)
    });

});
//*******************************************************************************************************