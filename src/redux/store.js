
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import { initContacts } from './Contacts/contacts.init-state';
import { initFilter } from './Filter/filter.init-state';
import { authReducer } from "./auth/auth.slice";
import { initAuth } from "./auth/auth.init-state";
import persistStore from "redux-persist/es/persistStore";
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'

const initState = {
    contacts: initContacts,
    filter: initFilter,
    user: initAuth,
}


export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        user: authReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})

export const persistor = persistStore(store)