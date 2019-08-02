import * as actions from '../Actions';

const initialState = {
  allSearchs: [],
  likedGIFs: [],
  searchResult: {},
  loading: false,
  currentSearch: ''
}

const appReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_GIF_SUCCESS) {
    return Object.assign({}, state, {
      searchResult: {
        title: action.title,
        url: action.url
      },
      loading: false,
      currentSearch: action.searchText
    })
  } else if (action.type === actions.FETCH_GIF_REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    })
  }
  return state
}

export default appReducer;