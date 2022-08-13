import { createSlice } from '@reduxjs/toolkit';

export const contactsState = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: ''
    },
    reducers: {
        addContact(state, action) {
            state.items = [action.payload, ...state.items]
        },
        deleteContact(state, action) {
            state.items.forEach((item) => { if (item.id === action.payload) { item.isDeleted = !item.isDeleted } })
        },
        deleteContactForever(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
    }
});

export const { addContact, deleteContact, deleteContactForever, setFilter } = contactsState.actions;
export const rootReducer = contactsState.reducer;
export const getContacts = state => state.items;
export const getFilter = state => state.filter;

const formingList = (state, flag = false) => state.items.filter(({ name, number, isDeleted }) =>
    (name.includes(state.filter) || number.includes(state.filter)) && isDeleted === flag);
            
export const getTrashList = state => formingList(state, true);
export const getContactsList = state => formingList(state);



