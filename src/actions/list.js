
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

const increateNumber = () => {
  return ({
    type: 'INCREATE_NUMBER'
  })
}

const decreateNumber = () => {
  return ({
    type: 'DECREATE_NUMBER'
  })
}

export {
  getOrderList,
  materialList,
  increateNumber,
  decreateNumber
}