export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":{
      return {...state, loading: true}
    }
    case "SET_NEWS":{
      return {...state, news: action.payload, loading: false}
    }
  }
}