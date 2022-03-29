
const listData = {
  orderList: [],
  materialLists: [],
  totalNumber: 1
}

const handleOrderList = (state = listData, action) => {
  switch(action.type) {
    case 'GET_ORDERLISTNEW':
      console.log('获取订单列表参数---', action.payload)
      return {
        ...state,
        orderList: action.payload
      };
    case 'GET_MATERAIL':
      return {
        ...state,
        materialLists: [
          {
            materailName: '粉笔',
            orderAcount: 13,
            start: 4
          },
          {
            materailName: '西瓜',
            orderAcount: 2,
            start: 5
          },
        ]
      }
    case 'INCREATE_NUMBER':
      return {
        ...state,
        totalNumber: action.payload.acount
      }
    case 'DECREATE_NUMBER_ACTION':
      return {
        ...state,
        totalNumber: state.totalNumber - action.payload.acount
      }
    default:
      return listData
  }
}

export default handleOrderList;
