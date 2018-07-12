import axios from 'axios';
import 'ts-jest'
import { search, getTrending } from '../api'

// jest.mock('axios');

describe('API', () => {
    it('#getTrending', async () => {
        // axios.get.mockResolvedValue(false);
        const data = await getTrending();
        expect(data).toBeDefined();
    });
    it('#search', async () => {
        const data = await search('goku');
        expect(data).toBeDefined();
    });
});