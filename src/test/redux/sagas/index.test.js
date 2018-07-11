import mockAxios from 'jest-mock-axios';
import { fetchGifts } from '../../../redux/sagas';

// afterEach(() => {
//     mockAxios.reset();
// });
 
// it('Fetch Gifts', () => {
//     let catchFn = jest.fn(),
//         thenFn = jest.fn();
 
//     let clientMessage = {text:""};

//     let responseObj = { data: 'gifts' };
//     mockAxios.mockResponse(responseObj);
 
//     fetchGifts(clientMessage)
//         .then(thenFn)
//         .catch(catchFn);

//     expect(mockAxios.get).toHaveBeenCalledWith('/foobar/', 'hello')

//     expect(thenFn).toHaveBeenCalledWith('gifts');
// });


