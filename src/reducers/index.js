import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  push,
  pop,
  peek,
  currentPage,
  nextPage,
  previousPage,
  // indexFromPage,
  isNextPage,
  isPreviousPage,
} from '../util/flow';

const initialFlow = {
  index: 0,
  stack: [],
  currentPage: currentPage([]).page,
  nextPage: nextPage([], 0).page,
  previousPage: (previousPage([]) || {}).page,
};

function flow(state = initialFlow, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':

      const pathname = action.payload.pathname;
      // console.log(pathname)

      if (isNextPage(state.stack, pathname)) {
        // console.log('FORWARD!');
        return {
          index: 0,
          stack: push(state.stack, state.index),
          currentPage: nextPage(state.stack, state.index).page,
          nextPage: (nextPage(push(state.stack, state.index), 0) || {}).page,
          previousPage: currentPage(state.stack).page,
        };
      }

      if (isPreviousPage(state.stack, pathname)) {
        // console.log('BACK!');
        return {
          index: peek(state.stack),
          stack: pop(state.stack),
          currentPage: previousPage(state.stack).page,
          nextPage: currentPage(state.stack).page,
          previousPage: (previousPage(pop(state.stack)) || {}).page,
        };
      }

      // console.log('SAME!');
      return state;
    // case 'NEXT_PAGE':
    //   return {
    //     index: 0,
    //     stack: push(state.stack, state.index),
    //     currentPage: nextPage(state.stack, state.index),
    //     nextPage: nextPage(push(state.stack, state.index), 0),
    //     previousPage: currentPage(state.stack),
    //   };
    // case 'PREVIOUS_PAGE':
    //   return {
    //     index: peek(state.stack),
    //     stack: pop(state.stack),
    //     currentPage: previousPage(state.stack),
    //     nextPage: currentPage(state.stack),
    //     previousPage: previousPage(pop(state.stack)),
    //   };
    case 'SET_NEXT_INDEX':
      return {
        ...state,
        index: action.index,
        nextPage: (nextPage(state.stack, action.index) || {}).page,
      };
    case 'RESET':
      return initialFlow;
    default:
      return state;
  }
}

export default combineReducers({
  flow,
  routing: routerReducer,
});
