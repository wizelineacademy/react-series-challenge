import searchActions from '../actions/searchValues'

const initialState = {
    searchValue: "trendy",
    gifs: null,
    favoritedImages: [
        
    ]
};

const SearchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case searchActions.types.SEARCH_FAVORITE_GIFS: {
            //const { searchedValue, url } = payload;
            console.log("SEARCH_FAVORITE_GIFS");
            console.log("PAYLOAD: " + JSON.stringify(payload));

            const newState = {...state};
            console.log(newState);
            newState.favoritedImages.push(payload);

            return newState;
        }

        case searchActions.types.SEARCH_SPECIFIED_GIFS: {
            /*let newState = null;
            console.log("SEARCH_SPECIFIED_GIFS");
            console.log(payload);
            const { searchValue } = "";
            fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${searchValue}`)
            .then(Response => {
                    return Response.json().then( (json) => {
                        //console.log(Object.keys(json.data).length);
                        var newArray = [];
                        var newObject = {};
                        
                        for(var a = 0; a <= Object.keys(json.data).length - 1; a++){
                            newObject = {};
                            newObject.id = json.data[a].id;
                            newObject.url = json.data[a].images.downsized.url;
                            newArray.push(newObject);
                        }

                        newState = {...state, gifs: newArray};
                        //this.setState({ gifs: newArray });
                    }
                )
            })*/
            
            return;
        }

        case searchActions.types.SEARCH_TRENDING: {
            /*let newState = null;
            console.log("SEARCH_TRENDING");
            fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
            //fetch(`http://api.giphy.com/v1/gifs/trending?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p`)
            .then(Response => {
                    return Response.json().then( (json) => {
                        console.log(json.data);
                        var newArray = [];
                        var newObject = {};
                        
                        for(var a = 0; a <= Object.keys(json.data).length - 1; a++){
                            newObject = {};
                            newObject.id = json.data[a].id;
                            newObject.url = json.data[a].images.downsized.url;
                            newArray.push(newObject);
                        }
                        console.log(newArray);
                        
                        //this.setState({ gifs: newArray });
                        newState = {...state, gifs: newArray};
                        console.log("NUEVO ESTADO. ", newState)                   
                    }
                )
            })
            return newState;*/
            return;
        }

        case searchActions.types.SEARCH_UPDATE_VALUE: {
            //console.log("updated state");
            //console.log("Payload", state.favoritedImages)
            //console.log("STATE PAYLOAD", state.favoritedImages[1].searchValue);
            const { searchedValue } = payload;
            console.log("BUSCADOR", searchedValue)
            console.log("payload", payload)
            let newState = {...state, searchValue: payload};
            console.log("ESTADO ACTUAL", newState.searchValue);
            
            let newArray = Object.keys(state.favoritedImages).map((key, index) => {
                return state.favoritedImages[index]
            }).filter(word => word.searchedValue === state.searchValue);
            console.log("NUEVO ARRAY", newArray);

            if(newArray !== undefined && newArray !== null && newArray.length >= 0){
                newState = { ...newState, favoritedImages: newArray };
            }
            
            return newState;
        }

        default: 
            return state;
    }
}

export default SearchReducer;