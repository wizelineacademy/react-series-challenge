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

export const searchGif = query =>{
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
    const gifs = window.sessionStorage.getItem("likeGifs")
    return new Promise(resolve =>{
        resolve(gifs)
    })
}