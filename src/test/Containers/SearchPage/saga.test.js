
import {call, put} from 'redux-saga/effects'
import {doQuerySearch} from "../../../Containers/SearchPage/saga"
import {querySearchSuccess} from "../../../Containers/SearchPage/action"
describe('>>>Saga search works ',()=>{
    const generator = doQuerySearch("") 
    it('+++ fetch search works', () => {
        const testValue = generator.next().value
        expect(testValue).toEqual(call(doQuerySearch))
     });
     it('+++ search FETCH_SUCCESS action', () => {
        
        const dummyOutput = "Dummy Output" ,
              testValue = generator.next(dummyOutput).value
        expect(testValue).toEqual(put(querySearchSuccess(undefined)))
     }); 

});