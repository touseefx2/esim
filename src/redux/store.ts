import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './slices';
import reduxStorage from './reduxStorage';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['user', 'theme', 'language'], // Only persist these reducers
  // blacklist: ['temporaryData'], // Exclude these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
  //       },
  //     }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(/* other middleware */),
});

// ✅ Define and export RootState & AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
