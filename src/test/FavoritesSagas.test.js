import { getFavoritesRSaga, loadFavoritesRSaga, filterChangeSaga, addRemoveHomeSaga, addRemoveViewSaga, addRemoveDetailsSaga, deleteFromArrayR, filterArray, addRemoveFavoriteSaga } from '../sagas/favorites_sagas';


class FakeStorage {
  constructor(elements = null) {
    this.data = { ...elements } || {};
  }

  getItem(key) {
    return this.data[key]
  }

  setItem(key, value) {
    this.data[key] = JSON.stringify(value)
  }
}

global.localStorage = new FakeStorage();

const storageItem = [
  {
    title: "happy emma watson GIF",
    id: "WsKVAem02Efuw",
    images:{
      original:{
        url:"https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif"
      }
    },
    favorite:false
  }
];

const originalArray = [
  'Harry Potter y el prisionero de Azkaban',
  'El Hobbit: La desolacion de Smaug',
  'Harry Potter y el principe mestizo',
  'El Hobbit: La batalla de los cinco Ejercitos',
  'Harry Potter y las reliquias de la muerte parte 1',
  'El Hobbit: Un viaje inesperado',
];

const originalArrayWithKeys = [
  { title: 'Harry Potter y el prisionero de Azkaban' },
  { title: 'El Hobbit: La desolacion de Smaug' },
  { title: 'Harry Potter y el principe mestizo' },
  { title: 'El Hobbit: La batalla de los cinco Ejercitos' },
  { title: 'Harry Potter y las reliquias de la muerte parte 1' },
  { title: 'El Hobbit: Un viaje inesperado' }
];

const filteredArray = [
  { title: 'Harry Potter y el prisionero de Azkaban' },
  { title: 'Harry Potter y el principe mestizo' },
  { title: 'Harry Potter y las reliquias de la muerte parte 1' }
]

const arrayMinusOne = [
  'Harry Potter y el prisionero de Azkaban',
  'El Hobbit: La desolacion de Smaug',
  'Harry Potter y el principe mestizo',
  'Harry Potter y las reliquias de la muerte parte 1',
  'El Hobbit: Un viaje inesperado',
];

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

const almostPopulatedArr = [ ...populatedArr ];
almostPopulatedArr.splice(0,1);

describe('Test Favorites Saga', () => {
  it('No storage', async () => {
    const sagaTrigger = loadFavoritesRSaga();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('With storage', async () => {
    localStorage.setItem('reactFavorites', storageItem)
    const sagaTrigger = loadFavoritesRSaga();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Filter Change Saga', async () => {
    const sagaTrigger = filterChangeSaga({ payload: '123' });
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Add Remove Home Saga', async() => {
    const payload = '123';
    const sagaTrigger = addRemoveHomeSaga({ payload })
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Add Remove View Saga', async() => {
    const params = { page: 1 };
    const payload = '123';
    const sagaTrigger = addRemoveViewSaga({ payload }, params);
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Add Remove Details Saga', async() => {
    const sagaTrigger = addRemoveDetailsSaga({ payload: { ...storageItem }});
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Delete from Array', () => {
    const baseArray = [ ...originalArray ];
    const result = deleteFromArrayR(baseArray, 3)
    expect(result).toEqual(arrayMinusOne);
  })
  it('Filter Array', () => {
    const baseArray = [ ...originalArrayWithKeys ];
    const result = filterArray('potter', baseArray);
    expect(result).toEqual(filteredArray);
  })
  it('Remove Favorite Saga', () => {
    const payload = {
      image: {
        title: "happy emma watson GIF",
        id: "WsKVAem02Efuw",
        images:{
          original:{
            url:"https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif"
          }
        },
        favorite:false
      }
    }

    const params = { favorites: [ ...populatedArr ] };

    const sagaTrigger = addRemoveFavoriteSaga({ payload }, params);

    sagaTrigger.next();
    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
  it('Add Favorite Saga', () => {
    const payload = {
      image: {
        title: "happy emma watson GIF",
        id: "WsKVAem02Efuw",
        images:{
          original:{
            url:"https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif"
          }
        },
        favorite:false
      }
    }

    const params = { favorites: [ ...almostPopulatedArr ] };

    const sagaTrigger = addRemoveFavoriteSaga({ payload }, params);

    sagaTrigger.next();
    sagaTrigger.next();
    expect(sagaTrigger.next().done).toBe(true);
  })
})