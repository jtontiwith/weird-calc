export const fetchGIF = (searchText, range = 0) => dispatch => {
  dispatch(fetchGIFRequest());
  const GIPHY_URL = `http://api.giphy.com/v1/gifs/translate?s=${searchText}&api_key=ECSXd98WrKns1jNgMPCoDCcopoHFsR3D&weirdness=${range}`  
  fetch(GIPHY_URL).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  }).then(GIF => { 
    dispatch(fetchGIFSuccess(GIF, searchText, range));
  }).catch(err => {
    dispatch(fetchGIFError(err))
    dispatch(showNotification(err.toString()));
  });
};


export const FETCH_GIF_REQUEST = 'FETCH_GIF_REQUEST';
export const fetchGIFRequest = () => ({
    type: FETCH_GIF_REQUEST,
    loading: 'loading...'
});


export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const fetchGIFSuccess = (GIF, searchText, range) => {
  return {
    type: FETCH_GIF_SUCCESS,
    title: GIF.data.title,
    url: GIF.data.images.fixed_width.url,
    searchText: searchText,
    range: range
  }
};

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const showNotification = (notification) => {
  return {
    type: SHOW_NOTIFICATION,
    notification: notification,
    time: Date.now()
  }
};

export const FETCH_GIF_ERROR = 'FETCH_GIF_ERROR';
export const fetchGIFError = (err) => {
  return {
    type: FETCH_GIF_ERROR,
    err: err.toString()
  }
};

export const LIKE_GIF = 'LIKE_GIF';
export const likeGIF = () => {
  return {
    type: LIKE_GIF
  }
};

export const DELETE_GIF = 'DELETE_GIF';
export const deleteGIF = (index) => {
  console.log(index)
  return {
    type: DELETE_GIF,
    index
  }
};

