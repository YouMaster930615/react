import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// 引入saga
import rootSaga from '../sagas/list_saga';
import orderSaga from '../sagas/order_saga';

import modules_saga from '../sagas/module'

import handleDetail from '../reducers/detail';
import handleOrderList from '../reducers/list';


const sagaMiddle = createSagaMiddleware()

const store = createStore(
  combineReducers({
    handleDetail,
    handleOrderList
  })
  , applyMiddleware(sagaMiddle))
  // sagaMiddle.run(orderSaga)
  // sagaMiddle.run(rootSaga)

  const sagas = modules_saga;
  sagas.map(item => sagaMiddle.run(item))

export default store;