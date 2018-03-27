import { call, takeEvery, put,takeLatest  } from 'redux-saga/effects';
import { getTrendingGifs, searchGif } from '../api/giphy'
import gifs from '../actions/gifs'


export function* loadTrendingGifs(){
    try{
        const response = yield call(getTrendingGifs)
        
        //poner aqui el acion para mostar gifs
        yield put(gifs.creators.getGifsCompleted(response))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* searchGifs({query}){
    try{
        const response = yield call(searchGif(query))
        //poner aqui el acion para mostar gifs
        yield put(gifs.creators.searchGifsCompleted(response))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.searchGifsFailed(error))
    }
}

export function* giphySaga(){
    //aqui poner el action creator del requested
    yield takeEvery(gifs.types.GET_GIFS_REQUESTED, loadTrendingGifs);
    yield takeLatest(gifs.types.SEARCH_GIF_REQUESTED,searchGifs);
}