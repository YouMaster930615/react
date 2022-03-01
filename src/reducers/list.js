
const listData = {
  orderList: [],
  materialLists: [],
  totalNumber: 1
}

const handleOrderList = (state = listData, action) => {
  switch(action.type) {
    case 'GET_ORDERLIST':
      console.log('获取订单列表')
      return {
        ...state,
        orderList: [
          {
            orderId: 12318094789123,
            orderType: '1',
            orderName: '午餐'
          },
          {
            orderId: 42389467289654,
            orderType: '2',
            orderName: '晚餐'
          }
        ]
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
        totalNumber: state.totalNumber * 3
      }
    case 'DECREATE_NUMBER':
      return {
        ...state,
        totalNumber: state.totalNumber - 3
      }
    default:
      return listData
  }
}

export default handleOrderList;
