"use client";

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default localStorage for web
import { combineReducers } from 'redux';
import favoritesReducer from './favoritesSlice';

// Combine reducers (if you have multiple slices, you can add them here)
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To avoid warnings with redux-persist
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
