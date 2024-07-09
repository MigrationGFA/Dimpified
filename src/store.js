import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/login';
import temPlate1Reducer from './features/Template/Template1';
import activeSectionReducer from './features/Template/activeTemplateSection';
import courseReducer from './features/course';
import serviceReducer from './features/service';
import ecosystemReducer from './features/ecosystem'; 
import form1Reducer from "./features/Template/Form1"

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  authentication: authReducer,
  template1: temPlate1Reducer,
  form1: form1Reducer,
  activeSection: activeSectionReducer,
  course: courseReducer,
  ecosystem: ecosystemReducer, 
  service: serviceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['service.serviceBackground'],
        ignoredActions: [
          'service/addServiceBackground',
          'service/removeServiceBackground',
          'service/updateServiceData',
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
