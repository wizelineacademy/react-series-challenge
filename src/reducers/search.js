import search from '../actions/search'

const { types: { SEARCH_FETCHED } } = search
const searchReducer = (state = [], action) => {
    const { type, payload } = action

    switch(type) {
        case SEARCH_FETCHED: {
            return [...payload]
        }
        default:
            return state;
    }
}

export default searchReducer