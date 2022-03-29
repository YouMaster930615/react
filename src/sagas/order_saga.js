import { all, put, takeEvery } from "redux-saga/effects";

function* handleGetOrderData(payload) {
    console.log('saga获取订单======', payload)
    const response = [ // 这里应该是 通过 axios 获取数据
        {
            key: '1001',
            userName: '徐凤年',
            arms: '绣冬',
            userArea: '北凉',
            sentences: 'XXXXX'
          },
          {
            key: '1002',
            userName: '李淳罡',
            arms: '木马牛',
            userArea: '西楚',
            sentences: '两袖青蛇'
          },
    ]
    yield put({type: 'GET_ORDERLISTNEW', payload: response})
}

function* getOrderList() {
    console.log('33333')
    yield takeEvery('GET_ORDERLIST', handleGetOrderData)
}

function* orderSaga() {
    yield all([getOrderList()])
}

export default orderSaga;