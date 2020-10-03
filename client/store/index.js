import { createStore } from 'redux';

export const GET_GOALS = 'GET_GOALS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_URL = 'SET_URL';

export const getGoals = (goals) => ({
  type: GET_GOALS,
  goals
})

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export const setUrl = (url) => {
  return {
    type: SET_URL,
    url
  }
}
chrome.storage.sync.get(null, function (data) {chrome.extension.getBackgroundPage().console.log(data)});
const initialState = {
  goals: [],
  currentPage: 'buttons',
  url: ''
}

function reducer (state = initialState, action) {
    switch(action.type) {
      case CHANGE_PAGE:
        return {...state, currentPage: action.page}
      case SET_URL:
        return {...state, url: action.url}  
      default:
        return state;  
    }
  }

const store = createStore(reducer);

export default store;