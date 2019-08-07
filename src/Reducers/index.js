import * as actions from '../Actions';

const initialState = {
  currentSearch: '',
  searchResult: {},
  allSearchs: [],
  likedGIFs: [],
  loading: false,
  error: null,
  notification: null
}

const appReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_GIF_SUCCESS) {
    return Object.assign({}, state, {
      searchResult: {
        title: action.title,
        url: action.url,
        range: action.range,
        fromSearch: action.searchText 
      },
      loading: false,
      error: false,
      currentSearch: action.searchText
    })
  } else if (action.type === actions.FETCH_GIF_REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    })
  } else if (action.type === actions.LIKE_GIF) {
    return Object.assign({}, state, {
      likedGIFs: [
        ...state.likedGIFs, 
          state.searchResult
      ]
    })
  } else if (action.type === actions.DELETE_GIF) {
    return Object.assign({}, state, {
      likedGIFs: state.likedGIFs.filter((gif, index) => index !== action.index)
    })
  } else if (action.type === actions.FETCH_GIF_ERROR) {
    return Object.assign({}, state, {
      error: action.err,
      loading: false
    })
  } else if (action.type === actions.SHOW_NOTIFICATION) {
    return Object.assign({}, state, {
      notification: action.notification,
      time: action.time
    })
  }

  return state
}

export default appReducer;