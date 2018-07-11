import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ConnectedGif,{Gif} from '../../components/Gif'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// Snapshot for Home React Component
describe('>>>Gif --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<Gif output={10}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
//*******************************************************************************************************
describe('>>>Gif --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
     const output = 10

    beforeEach(()=>{
        wrapper = shallow(<Gif output={output}/>)
        
    });

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    
     it('+++ contains output', () => {
        expect(wrapper.find('img').prop('value')).toEqual(output)
    });
})
//*******************************************************************************************************
describe('>>>Gif --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedHome store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('output')).toEqual(initialState.output)
    });

});

//*******************************************************************************************************
describe('>>>Gif --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })

  

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
describe('>>>Gif --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
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