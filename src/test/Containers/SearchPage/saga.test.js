
import {call, put} from 'redux-saga/effects'
import {doQuerySearch, querySearchSuccess} from "../../../Containers/SearchPage/saga"
describe('>>>Saga home works ',()=>{
    const generator = doQuerySearch("") 
    it('+++ fetch search works', () => {
        const testValue = generator.next().value
        expect(testValue).toEqual(call(doQuerySearch))
     });
     it('+++ ASYNC_FETCH_SUCCESS action', () => {
        
        const dummyOutput = "Dummy Output" ,
              testValue = generator.next(dummyOutput).value
        expect(testValue).toEqual(put(querySearchSuccess(dummyOutput)))
     }); 

});