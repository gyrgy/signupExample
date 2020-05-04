import React, { ReactElement } from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'src/store/sagas/rootSaga';
import { Provider } from 'react-redux';
import { rootReducer } from 'src/store/reducers/rootReducer';
import { RootStoreType } from 'src/constants/types';
import { initialState } from 'src/constants/initialState';
import { render } from '@testing-library/react';

const sagaMiddleWare = createSagaMiddleware();

export const renderWithStore = (
  ui: ReactElement,
  customInitialState?: RootStoreType
) => {
  const store = createStore(
    rootReducer,
    customInitialState || initialState,
    applyMiddleware(sagaMiddleWare)
  );
  sagaMiddleWare.run(rootSaga);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
};
