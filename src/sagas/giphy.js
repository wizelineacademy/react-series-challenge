import { call, takeEvery, put,takeLatest  } from 'redux-saga/effects';
import {getOneGif, getTrendingGifs, searchGif, addLikeGif, getLikedGifs, removeLikeGif, getLikedGifsSearch } from '../api/giphy'
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

export function* loadFavotiteGifs(){
    try{
        const response = yield call(getLikedGifs)
        
        //poner aqui el acion para mostar gifs
        yield put(gifs.creators.getGifsCompleted(response))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* getOneGifSaga({id}){
    try{
        const response = yield call(getOneGif,id)
        //poner aqui el acion para mostar gifs
        response.index = 0
        yield put(gifs.creators.getGifsCompleted([response]))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* searchGifs({query}){
    try{
        const response = yield call(searchGif,query)
        //poner aqui el acion para mostar gifs
        
        yield put(gifs.creators.getGifsCompleted(response))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* searchGifsLocal({query}){
    try{
        const response = yield call(getLikedGifsSearch,query)
        
        //poner aqui el acion para mostar gifs
        
        yield put(gifs.creators.getGifsCompleted(response))
    }catch(error){
        //poner aqui el action q muestre el error
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* likeGifStart(gif){
    try{
       yield call(addLikeGif,gif)
       yield call(gifs.creators.getGifsRequested)
    }catch(error){
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* unLikeGifStart(gif){
    try{
        yield call(removeLikeGif,gif)
        yield call(gifs.creators.getGifsRequested)
    }catch(error){
        yield put(gifs.creators.getGifsFailed(error))
    }
}

export function* giphySaga(){
    //aqui poner el action creator del requested
    
    yield takeEvery(gifs.types.GET_GIFS_REQUESTED, loadTrendingGifs);
    yield takeLatest(gifs.types.SEARCH_GIF_REQUESTED,searchGifs);
    yield takeLatest(gifs.types.LIKE_GIF,likeGifStart);
    yield takeLatest(gifs.types.UNLIKE_GIF,unLikeGifStart);
    yield takeLatest(gifs.types.GET_GIFS_LOCAL_REQUESTED,loadFavotiteGifs);
    yield takeLatest(gifs.types.SEARCH_GIF_LOCAL_REQUESTED,searchGifsLocal);
    yield takeLatest(gifs.types.GET_ONE_GIF,getOneGifSaga);
}