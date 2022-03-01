const detailData = {
  detailInfo: {
    className: '',
    studensNumber: 0,
    start: null,
    end: null
  },
  isCanEditor: true
}

const handleDetail= (state = detailData, action) => {
  switch(action.type){
    case 'GET_DETAIL':
      return {
        ...state,
        detailInfo: {
          className: '实验室第三中学',
          studensNumber: 34,
          start: 12035723748,
          end: 132463454374
        }
      }
    case 'POST_EDITORDETAIL':
      return {
        ...state,
        detailInfo: {
          className: '实验中学',
          studensNumber: 34,
          start: 12035723748,
          end: 132463454374
        }
      }
    default:
      return state
  }
}

export default handleDetail;