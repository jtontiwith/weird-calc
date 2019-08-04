import * as actions from '../Actions';

const initialState = {
  currentSearch: '',
  searchResult: {},
  allSearchs: [],
  likedGIFs: [],
  loading: false
}

const appReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_GIF_SUCCESS) {
    return Object.assign({}, state, {
      searchResult: {
        title: action.title,
        url: action.url,
        range: action.range
      },
      loading: false,
      currentSearch: action.searchText
    })
  } else if (action.type === actions.FETCH_GIF_REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    })
  } else if (action.type === actions.LIKE_GIF) {
    return Object.assign({}, state, {
      likedGIFs: [
        ...state.likedGIFs, { 
          ...state.searchResult, 
          fromSearch: state.currentSearch
        }
      ]
    })
  } else if (action.type === actions.DELETE_GIF) {
    return Object.assign({}, state, {
      likedGIFs: state.likedGIFs.filter((gif, index) => index !== action.index)
    })
  }
  return state
}

export default appReducer;