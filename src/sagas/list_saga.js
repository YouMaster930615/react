
import { all, put, takeEvery } from 'redux-saga/effects'

function* decrement(action) {
    console.log('+++++++++',action.payload);
    // 这里是执行 - 得操作， 但是这里得名字不能和监听action得一样，不然就会无限循环
    yield put({type: 'DECREATE_NUMBER_ACTION', payload: action.payload})
}

function* watchDecrement() {
    // 监听类型为increment_saga的action，监听到启动increment
    yield takeEvery('DECREATE_NUMBER', decrement) 
}

function* rootSaga() {
    // 启动watchIncrement
    yield all([watchDecrement()])
}
export default rootSaga
