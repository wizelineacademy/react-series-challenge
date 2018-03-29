const api_key = "api_key=fd5fadd98b414e4091e60466e59dcf02"

export const getTrendingGifs = ()=>{
    return fetch(`http://api.giphy.com/v1/gifs/trending?${api_key}`, {
        method: 'GET'
      })
        .then((response)=> response.json())
        .then((json)=>{
            
            return json.data
        })
        .catch((error)=>{
            throw error
        })
}

export const getOneGif = (id)=>{
    return fetch(`http://api.giphy.com/v1/gifs/${id.id}?${api_key}`, {
        method: 'GET'
      })
        .then((response)=> response.json())
        .then((json)=>{
            
            return json.data
        })
        .catch((error)=>{
            throw error
        })
}

export const searchGif = (query) =>{
    return fetch(`http://api.giphy.com/v1/gifs/search?${api_key}&q=${query}`, {
        method: 'GET'
      })
        .then((response)=> response.json())
        .then((json)=>{
            return json.data
        })
        .catch((error)=>{
            throw error
        })
}

export const getLikedGifs = ()=>{
    try{
        const gifs = JSON.parse(window.sessionStorage.getItem("likeGifs")) || []
    return gifs
    }
    catch(error){
        throw error
    }
}

export const getLikedGifsSearch = query=>{
    try{
        const gifs = JSON.parse(window.sessionStorage.getItem("likeGifs")) || []
    return gifs.filter((w)=>{
        return w.title.indexOf(query) >-1 || w.slug.indexOf(query) >-1
    })
    }
    catch(error){
        throw error
    }
}

export const addLikeGif = gif =>{
    try{
    const gifs = JSON.parse(window.sessionStorage.getItem("likeGifs")) || []
    window.localStorage.setItem('likeGifs',JSON.stringify([...gifs,gif]))
    
    return getTrendingGifs()
}
    
    catch(error){
        throw error
    }
}

export const removeLikeGif = gif =>{
    try{
    const gifs = JSON.parse(window.sessionStorage.getItem("likeGifs")) || []
    window.localStorage.setItem('likeGifs',JSON.stringify([...gifs.filter((g)=>{ return g.id !== gif.id })]))
    return getTrendingGifs()
}
    
    catch(error){
        throw error
    }
}