// Special thanks to: Dan Abramov
// For the awesome "LocalStorage Persistence" Tutorial that helped me implement it on the challenge 
// Can be found here: https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
 }

 export const saveState = (state) => {
     try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
     } catch(err) {

     }
 }