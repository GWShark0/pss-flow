import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  push,
  pop,
  peek,
  currentPage,
  nextPage,
  previousPage,
  isNextPage,
  isPreviousPage,
} from '../util/flow';
import { FORM } from '../util/pages';

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

      if (isNextPage(state.stack, pathname)) {
        return {
          index: 0,
          stack: push(state.stack, state.index),
          currentPage: nextPage(state.stack, state.index).page,
          nextPage: (nextPage(push(state.stack, state.index), 0) || {}).page,
          previousPage: currentPage(state.stack).page,
        };
      }

      if (isPreviousPage(state.stack, pathname)) {
        return {
          index: peek(state.stack),
          stack: pop(state.stack),
          currentPage: previousPage(state.stack).page,
          nextPage: currentPage(state.stack).page,
          previousPage: (previousPage(pop(state.stack)) || {}).page,
        };
      }

      return state;
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

function form(state = FORM, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return state.map(field => {
        if (field.name === action.name) {
          return {
            ...field,
            value: action.value,
          };
        }
        return field;
      })
    case 'RESET':
      return FORM;
    default:
      return state;
  }
}

export default combineReducers({
  flow,
  form,
  routing: routerReducer,
});
