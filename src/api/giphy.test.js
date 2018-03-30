import { loadTrending, loadSearch } from './giphy';

describe('API', () => {
	it('should load trending gifs', async () => {
		const gifs = await loadTrending();
		expect(gifs.length).toBe(24);
	});
	it('should load searched text gifs', async () => {
		const gifs = await loadSearch('test');
		expect(gifs.length).toBe(24);
	});
});
