import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import handleDetail from '../reducers/detail';
import handleOrderList from '../reducers/list';


const sagaMiddle = createSagaMiddleware()

const store = createStore(
  combineReducers({
    handleDetail,
    handleOrderList
  })
  , applyMiddleware(sagaMiddle))

export default store;