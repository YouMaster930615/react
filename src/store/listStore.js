import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// 引入saga
import rootSaga from '../sagas/list_saga';

import handleDetail from '../reducers/detail';
import handleOrderList from '../reducers/list';


const sagaMiddle = createSagaMiddleware()

const store = createStore(
  combineReducers({
    handleDetail,
    handleOrderList
  })
  , applyMiddleware(sagaMiddle))
  sagaMiddle.run(rootSaga)

export default store;