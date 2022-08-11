import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { middleware } from './middleware';
import { contactsState } from './slices';

const rootReducer = combineReducers({
    contacts: contactsState.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware,
    },
) 

export const persistor = persistStore(store);
