
const getOrderList = () => {
  return ({
    type: 'GET_ORDERLIST',
  })
}

const materialList = () => {
  return ({
    type: 'GET_MATERAIL',
  })
}

const increateNumber = (params) => {
  return {
    type: 'INCREATE_NUMBER',
    payload: {
      acount: Math.ceil(params)
    }
  }
}

const decreateNumber = (params) => {
  return ({
    type: 'DECREATE_NUMBER',
    payload: {
      acount: Math.ceil(params)
    }
  })
}

export {
  getOrderList,
  materialList,
  increateNumber,
  decreateNumber
}