import { updateContentSaga, getNewContentSaga } from '../sagas/home_sagas';

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
];

const populatedFilteredArr = [
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
]

const favorites = [
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
]

describe('Home Sagas Test', () => {
  it('Update content', async () => {
    const params ={
      list: {
        currentList: [
          ...populatedArr,
          ...populatedArr,
          { ...populatedArr[0] }
        ]
      },
      favorites,
    };
    const sagaTrigger = updateContentSaga(null, params)
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Get New Content Trending', async () => {
    const payload = 2;
    const params = {
      search: '',
      resp: {
        data: [
          ...populatedArr,
          ...populatedArr,
          ...populatedArr,
          ...populatedArr,
          ...populatedArr,
          ...populatedArr
        ],
        pagination: {
          total_count: 42
        }
      },
      favorites    
    }
    const sagaTrigger = getNewContentSaga({ payload }, params)
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Get New Content Trending', async () => {
    const payload = 2;
    const params = {
      search: 'emma',
      resp: {
        data: [
          ...populatedFilteredArr,
          ...populatedFilteredArr,
          ...populatedFilteredArr,
          ...populatedFilteredArr,
          ...populatedFilteredArr,
          ...populatedFilteredArr
        ],
        pagination: {
          total_count: 42
        }
      },
      favorites    
    }
    const sagaTrigger = getNewContentSaga({ payload }, params)
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
})
