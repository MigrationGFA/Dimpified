

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session'
import authReducer from './features/login';

const persistConfig = {
  key: 'root',
  storage,
  // storageSession,
};

const rootReducer = combineReducers({
  // Add your reducers here 
  authentication: authReducer,
  
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
