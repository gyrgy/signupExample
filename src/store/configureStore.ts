import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootSaga } from 'src/store/sagas/rootSaga';
import { rootReducer } from 'src/store/reducers/rootReducer';
import { initialState } from 'src/constants/initialState';

const sagaMiddleWare = createSagaMiddleware();

const logger = createLogger();

const configureStore = () => {
  const middleWares = [sagaMiddleWare];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger as SagaMiddleware<object>);
  }

  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default configureStore;
