/**
 *  apllyMiddleware => aplicar configurações de middlewares dentro do store
 * compose => dá um merge em várias configurações, unindo o console.tron junto
 * com as configurações de middlewares (apllyMiddleware)
 */
import { createStore, applyMiddleware, compose } from 'redux';

// Importação da função
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/rootReducer';

// Importação da combinação dos sagas
import sagas from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);

// Start o middleware, passando todos que exisitrem
sagaMiddleware.run(sagas);

export default store;
