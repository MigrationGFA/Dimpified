import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/login';
import temPlate1Reducer from './features/Template/Template1';
import activeSectionReducer from './features/Template/activeTemplateSection';
import courseReducer from './features/course';
import registerReducer from "./features/Register"
import serviceReducer from './features/service';
import ecosystemReducer from './features/ecosystem'; 
import form1Reducer from "./features/Template/Form1"
import productReducer from './features/product';
import mainTemplateReducer from "./features/Template/MainTemplate"

// Define your app version
const APP_VERSION = '1.1.3';

const persistConfig = {
  key: 'root',
  storage,
  version: APP_VERSION,
  migrate: (state) => {
    const currentVersion = state?._persist?.version;
    if (currentVersion !== APP_VERSION) {
      // When the version is different, clear the persisted data
      storage.removeItem('persist:root'); // Removes the persisted state from storage
      return Promise.resolve(undefined); // Forces app to start fresh
    }
    return Promise.resolve(state); 
  }
};

const rootReducer = combineReducers({
  authentication: authReducer,
  template1: temPlate1Reducer,
  mainTemplate: mainTemplateReducer,
  form1: form1Reducer,
  activeSection: activeSectionReducer,
  course: courseReducer,
  ecosystem: ecosystemReducer, 
  service: serviceReducer,
  register: registerReducer,
  product: productReducer
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
