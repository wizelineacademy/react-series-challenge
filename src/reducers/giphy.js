import appActions from '../actions';

const giphyReducer = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case appActions.types.GIGHY_FETCHED:

            const {data} = payload;

            return [...data]; // new state

        default:
            return state;
    }

};

export default giphyReducer;
