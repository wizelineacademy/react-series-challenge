export const loadTrending = () => {
	console.log('[API] retrieving trending...');
	return fetch(
		'http://api.giphy.com/v1/gifs/trending?api_key=1PwdD3bS9JHQDGug0JKcOcvRG7KgovDn'
	)
		.then(res => res.json())
		.then(data => data.data)
		.catch(err => {
			console.log('parsing failed', err);
			return { err };
		});
};
