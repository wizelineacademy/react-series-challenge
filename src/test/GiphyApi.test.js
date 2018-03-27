import {getTrendingList, searchGifs, getById} from '../api/giphy'

describe('call to trending api', () =>{
    it('get trending gifs', async () => {
        await getTrendingList({
            payloads: 25
        });
    })
});

describe('call to search api', () =>{
    it('search gifs', async () => {
        await searchGifs({
            query:{
                payloads: 'red'
            }
        });
    })
});

describe('call to get target gif api', () =>{
    it('search gifs', async () => {
        await getById('KWhzYRArxnE9U0ioHW');
    })
});