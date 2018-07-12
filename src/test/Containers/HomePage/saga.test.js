
import {call, put} from 'redux-saga/effects'
import {doQueryTrending, } from "../../../Containers/HomePage/saga"
import {queryTrendingSuccess} from "../../../Containers/HomePage/action"
describe('>>>Saga home works ',()=>{
    const generator = doQueryTrending("") 
    it('+++ fetch trending works', () => {
        const testValue = generator.next().value
        expect(testValue).toEqual(call(doQueryTrending))
     });
     it('+++ ASYNC_FETCH_SUCCESS action', () => {
        
        const dummyOutput = "Dummy Output" ,
              testValue = generator.next(dummyOutput).value
        expect(testValue).toEqual(put(queryTrendingSuccess(dummyOutput)))
     }); 

});