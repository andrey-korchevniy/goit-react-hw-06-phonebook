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
            state.items = state.items.filter((item) => {console.log(item.id !== action.payload); return item.id !== action.payload })
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
    }
});

export const { addContact, deleteContact, deleteContactForever, setFilter } = contactsState.actions;