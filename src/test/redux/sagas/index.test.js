import axios from 'axios';
import { fetchGifts } from '../../../redux/sagas';

jest.mock('axios');

test('should fetch gifts', () => {
    const resp = {data: {data: 'url'}};
  
    // or you could use the following depending on your use case:
    axios.get.mockImplementation(() => Promise.resolve(resp));
    fetchGifts({text:""}).then(response => expect(response).toEqual(resp.data))
    fetchGifts({text:"r"}).then(response => expect(response).toEqual(resp.data))
});


