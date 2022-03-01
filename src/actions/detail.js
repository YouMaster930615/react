const getDetail = () => {
  return ({
    type: 'GET_DETAIL',
  })
}

const editorDetail = () => {
  return ({
    type: 'POST_EDITORDETAIL',
  })
}

export {
  getDetail,
  editorDetail
}