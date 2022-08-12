import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

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

export const GetListOfContacts = (trash) => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    let contactsForRender = [];

    if (contacts.length) {
        contactsForRender = contacts.filter(({ name, number, isDeleted }) =>
        (name.includes(filter) || number.includes(filter)) && isDeleted === trash)
    } 
    return contactsForRender;
}

export const { addContact, deleteContact, deleteContactForever, setFilter } = contactsState.actions;
export const rootReducer = contactsState.reducer;