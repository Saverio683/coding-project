import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import countriesReducer from './countries/countries.slice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const logger = createLogger({
    duration: true
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    countries: countriesReducer
}))

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middleware = getDefaultMiddleware({
            thunk: true,
            serializableCheck: false
        })
            .prepend()
        return process.env.NODE_ENV !== 'production' ? middleware.concat(logger) : middleware
    },
    devTools: process.env.NODE_ENV !== 'production'
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)