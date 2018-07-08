export const loadFavorites = () =>{
    try {
        const serializedState = localStorage.getItem('favorites');
        if(serializedState === null){
            return {};
        }
        return JSON.parse(serializedState);
    }catch(err){
        return {};
    }
};

export const saveFavorites = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favorites', serializedState);
    }catch(err){
    }
}