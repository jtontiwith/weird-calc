export const fetchGIF = (searchText, range = 0) => dispatch => {
  dispatch(fetchGIFRequest());
  const GIPHY_URL = `http://api.giphy.com/v1/gifs/translate?s=${searchText}&api_key=ECSXd98WrKns1jNgMPCoDCcopoHFsR3D&weirdness=${range}`  
  fetch(GIPHY_URL).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  }).then(GIF => { 
    dispatch(fetchGIFSuccess(GIF, searchText));
  }).catch(err => {
    dispatch(fetchGIFError(err))
  });
};


export const FETCH_GIF_REQUEST = 'FETCH_GIF_REQUEST';
export const fetchGIFRequest = () => {
  console.log('inside gif request!')
  return {
    type: FETCH_GIF_REQUEST,
    loading: 'loading...'
  }
};


export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const fetchGIFSuccess = (GIF, searchText) => {
  return {
    type: FETCH_GIF_SUCCESS,
    title: GIF.data.title,
    url: GIF.data.images.preview_gif.url,
    searchText: searchText
  }
};


export const FETCH_GIF_ERROR = 'FETCH_GIF_ERROR';
export const fetchGIFError = (err) => {
  console.log('inside gif error!' + err)
  return {
    type: FETCH_GIF_ERROR
    
  }
};