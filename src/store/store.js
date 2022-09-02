import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {key: 'root', storage, blacklist: ['user']};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

/*
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {key: 'root', storage, whitelist: ['cart']};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
*/

/*
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
//import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';

const middleWares = [logger];
const persistConfig = {key: 'root', storage, blacklist: ['user']};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
*/


/*
import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  //console.log('type: ', action.type);
  //console.log('payload: ', action.payload);
  //console.log('currentState: ', store.getState());
  next(action);
  //console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
*/


/*
import { compose, createStore, applyMiddleware } from 'redux';
//import { compose, configureStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);
const loggerMiddleWares = (store) => (next) => (action) => {

}

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
//export const store = configureStore(rootReducer, undefined, composedEnhancers);
*/
