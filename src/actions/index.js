// Action types:
export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

//Action creators
let fakeID = 0;
export const addItem = (text) => ({
    type : ADD_ITEM,
    id   : fakeID++,
    text
});

export const deleteItem = (id) => ({
    type : DELETE_ITEM,
    id
})

export const updateItems = ({data}) => ({
    type : UPDATE_ITEMS,
    data
})

