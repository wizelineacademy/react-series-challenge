import gifs from './gifs'

describe('test types and creators', ()=>{
    it('types',()=>{
       expect( gifs.types.GET_GIFS_COMPLETED).toBe("GET_GIFS_COMPLETED")
       expect( gifs.types.GET_GIFS_FAILED).toBe("GET_GIFS_FAILED")
       expect(gifs.types.LIKE_GIF).toBe("LIKE_GIF")
    })
    
})

describe('test creators',()=>{
    it('creators',()=>{
        expect(gifs.creators.getOneGif().type).toBe("GET_ONE_GIF")
        expect(gifs.creators.setQuery().type).toBe("SET_QUERY")
        expect(gifs.creators.getGifsRequested().type).toBe("GET_GIFS_REQUESTED")
        expect(gifs.creators.getGifsFailed().type).toBe("GET_GIFS_FAILED")
        expect(gifs.creators.getGifsLocalRequested().type).toBe("GET_GIFS_LOCAL_REQUESTED")
        expect(gifs.creators.getGifsLocalCompleted().type).toBe("GET_GIFS_LOCAL_COMPLETED")
        expect(gifs.creators.getGifsLocalFailed().type).toBe("GET_GIFS_LOCAL_FAILED")
        expect(gifs.creators.searchGifsRequested().type).toBe("SEARCH_GIF_REQUESTED")
        expect(gifs.creators.searchGifsCompleted().type).toBe("SEARCH_GIF_COMPLETED")
        expect(gifs.creators.searchGifsFailed().type).toBe("SEARCH_GIF_FAILED")
        expect(gifs.creators.searchGifsLocalRequested().type).toBe("SEARCH_GIF_LOCAL_REQUESTED")
        expect(gifs.creators.searchGifsLocalCompleted().type).toBe("SEARCH_GIF_LOCAL_COMPLETED")
        expect(gifs.creators.searchGifsLocalFailed().type).toBe("SEARCH_GIF_LOCAL_FAILED")
        expect(gifs.creators.likeGif().type).toBe("LIKE_GIF")
        expect(gifs.creators.unlikeGif().type).toBe("UNLIKE_GIF")
        expect(gifs.creators.getGifsCompleted().type).toBe("GET_GIFS_COMPLETED")
        
    })
})