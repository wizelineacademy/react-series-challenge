export const loadTrending = () => {
	//console.log('[API] retrieving trending...');
	return fetch(
		'http://api.giphy.com/v1/gifs/trending?api_key=1PwdD3bS9JHQDGug0JKcOcvRG7KgovDn&limit=24'
	)
		.then(res => res.json())
		.then(data => data.data)
		.catch(err => {
			console.log('parsing failed', err);
			return { err };
		});
};

export const loadSearch = text => {
	//console.log('[API] retrieving search...');
	return fetch(
		'http://api.giphy.com/v1/gifs/search?q=' +
			text +
			'&api_key=1PwdD3bS9JHQDGug0JKcOcvRG7KgovDn&limit=24'
	)
		.then(res => res.json())
		.then(data => data.data)
		.catch(err => {
			console.log('parsing failed', err);
			return { err };
		});
};
