import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer } from '../reducer/todoRedux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer)
export const persistor = persistStore(store);