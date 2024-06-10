import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/login';
import temPlate1Reducer from './features/Template/Template1';
import activeSectionReducer from './features/Template/activeTemplateSection';
import courseReducer from './features/course';
import ecosystemReducer from './features/ecosystem'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  authentication: authReducer,
  template1: temPlate1Reducer,
  activeSection: activeSectionReducer,
  course: courseReducer,
  ecosystem: ecosystemReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
