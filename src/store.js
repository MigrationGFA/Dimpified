

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session'
import authReducer from './features/login';
import temPlate1Reducer from "./features/Template/Template1"
import activeSectionReducer from './features/Template/activeTemplateSection';

const persistConfig = {
  key: 'root',
  storage,
  // storageSession,
};

const rootReducer = combineReducers({
  // Add your reducers here 
  authentication: authReducer,
  template1: temPlate1Reducer,
  activeSection: activeSectionReducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
