import { getDetailsSaga } from '../sagas/details_sagas';

const populatedArr = [
  {
    title: "happy emma watson GIF",
    id:"WsKVAem02Efuw",
    images: {
      original:{
        url: "https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"emma watson GIF",
    id:"rSsoG2WPmzOIE",
    images: {
      original:{
        url: "https://media3.giphy.com/media/rSsoG2WPmzOIE/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"emma watson GIF",
    id:"fZLdJsdeFLNM4",
    images: {
      original:{
        url: "https://media0.giphy.com/media/fZLdJsdeFLNM4/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"emma watson eye roll GIF",
    id:"fvqITkChKLUys",
    images: {
      original:{
        url: "https://media0.giphy.com/media/fvqITkChKLUys/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"gal gadot model GIF",
    id:"K7AkPKRqzlWHC",
    images: {
      original:{
        url: "https://media0.giphy.com/media/K7AkPKRqzlWHC/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"gal gadot help GIF",
    id:"ZKenA3uegc2cM",
    images: {
      original:{
        url: "https://media0.giphy.com/media/ZKenA3uegc2cM/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"gal gadot page GIF",
    id:"Kk7HyZujHqSaY",
    images: {
      original:{
        url: "https://media3.giphy.com/media/Kk7HyZujHqSaY/giphy.gif"
      }
    },
    favorite:false
  },
  {
    title:"sofi tukker baby i'm a queen GIF by Ultra Music",
    id:"1BdNuLAIL7IbsrnziJ",
    images: {
      original:{
        url: "https://media1.giphy.com/media/1BdNuLAIL7IbsrnziJ/giphy.gif"
      }
    },
    favorite:false
  }
];

describe('Test Details Saga', () => {
  it('getDetailsSaga --> fetch', async () => {
    const params = {
      favorites: [],
      list: {
        currentList: []
      },
      fetch: {
        data: {
          title: "happy emma watson GIF",
          id:"WsKVAem02Efuw",
          images: {
            original:{
              url: "https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif"
            }
          },
          favorite:false
        }
      }
    }
    const sagaTrigger = getDetailsSaga({ payload: 'WsKVAem02Efuw' }, params);
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('getDetailsSaga --> favorites', async () => {
    const params = {
      favorites: [ ...populatedArr ],
      list: {
        currentList: []
      },
      fetch: {}
    }
    const sagaTrigger = getDetailsSaga({ payload: 'WsKVAem02Efuw' }, params);
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('getDetailsSaga --> content', async () => {
    const params = {
      favorites: [],
      list: {
        currentList: [ ...populatedArr ]
      },
      fetch: {}
    }
    const sagaTrigger = getDetailsSaga({ payload: 'WsKVAem02Efuw' }, params);
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
})