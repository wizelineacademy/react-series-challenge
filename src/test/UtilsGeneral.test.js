import { getPaginator, markFavorites } from '../utils/general';

const paginatorOne = {
  totalPages: 5,
  currentPage: 3,
  prevPage: 2,
  nextPage: 4
}

const paginatorTwo = {
  totalPages: 3,
  currentPage: 3,
  prevPage: 2,
  nextPage: 3
}

const paginatorThree = {
  totalPages: 5,
  currentPage: 1,
  prevPage: 1,
  nextPage: 2
}

const paginatorFour = {
  totalPages: 1,
  currentPage: 1,
  prevPage: 1,
  nextPage: 1
}

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

const favorites = [
  {
    title:"emma watson GIF",
    id:"fZLdJsdeFLNM4",
    images: {
      original:{
        url: "https://media0.giphy.com/media/fZLdJsdeFLNM4/giphy.gif"
      }
    },
    favorite: true
  },
  {
    title:"gal gadot model GIF",
    id:"K7AkPKRqzlWHC",
    images: {
      original:{
        url: "https://media0.giphy.com/media/K7AkPKRqzlWHC/giphy.gif"
      }
    },
    favorite: true
  },
];

const finalArray = [
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
    favorite:true
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
    favorite:true
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

describe('Utils -> General - Test', () => {
  it('getPaginator middle page', () => {
    const result = getPaginator(3,70);
    expect(result).toEqual(paginatorOne);
  })
  it('getPaginator last page', () => {
    const result = getPaginator(3,35);
    expect(result).toEqual(paginatorTwo);
  })
  it('getPaginator first page', () => {
    const result = getPaginator(1,70);
    expect(result).toEqual(paginatorThree);
  })
  it('getPaginator single page', () => {
    const result = getPaginator(1,10);
    expect(result).toEqual(paginatorFour);
  })
  it('getPaginator bad page', () => {
    const result = getPaginator(10,10);
    expect(result).toBe(false);
  })
  it('markFavorites', () => {
    const result = markFavorites(populatedArr, favorites);
    expect(result).toEqual(finalArray)
  })
})