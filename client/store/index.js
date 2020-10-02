import { createStore } from 'redux';

export const GET_GOALS = 'GET_GOALS';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const getGoals = (goals) => ({
  type: GET_GOALS,
  goals
})

export const changePage = (page) => {
  chrome.extension.getBackgroundPage().console.log('Changepage action creator ran')
  return {
    type: CHANGE_PAGE,
    page
  }
}
chrome.extension.getBackgroundPage().console.log('The reducer file loaded')
store.dispatch(changePage('buttons'))

export const dispatchPageChange = (newPage) => {
  chrome.extension.getBackgroundPage().console.log('Dispatch pageChange ran')
    chrome.extension.getBackgroundPage().console.log('Dispatch pageChange ran')
    dispatch(changePage(newPage))
}

const initialState = {
  goals: [],
  currentPage: 'buttons'
}

function reducer (state = initialState, action) {
  chrome.extension.getBackgroundPage().console.log('The reducer was activated')
    switch(action.type) {
      case CHANGE_PAGE:
        chrome.extension.getBackgroundPage().console.log('We have hit our case change page state')
        return {...state, currentPage: action.page}
      default:
        return state;  
    }
  }
  
const store = createStore(reducer);

export default store;