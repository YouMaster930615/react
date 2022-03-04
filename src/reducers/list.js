
const listData = {
  orderList: [
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
  ],
  materialLists: [],
  totalNumber: 1
}

const handleOrderList = (state = listData, action) => {
  switch(action.type) {
    case 'GET_ORDERLIST':
      console.log('获取订单列表')
      return {
        ...state,
        orderList: []
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
