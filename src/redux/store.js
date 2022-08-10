import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReduser = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            return [action.payload, ...state]
        },
        deleteContact(state, action) {
            return state.forEach((contact) => { if (contact.id === action.payload) { contact.isDeleted = !contact.isDeleted } })
        },
        deleteContactForever(state, action) {
            return state.filter((contact) => contact.id !== action.payload)
        },
        
    }
});
export const { addContact, deleteContact, deleteContactForever } = contactsReduser.actions;

const filterReducer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) { return state = action.payload },
    }
});
export const { setFilter } = filterReducer.actions;

const rootReducer = combineReducers({
    contacts: contactsReduser.reducer,
    filter: filterReducer.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    },
) 

export const persistor = persistStore(store);
