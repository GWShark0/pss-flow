import { combineReducers } from 'redux';
import { push, pop, peek, currentPage, nextPage, previousPage } from '../util/flow';
import { FORM } from '../util/form';

const initialFlow = {
  index: 0,
  stack: [],
  currentPage: currentPage([]).page,
  nextPage: nextPage([], 0).page,
  previousPage: previousPage([]).page,
};

function flow(state = initialFlow, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      const nextStack = push(state.stack, state.index);
      return {
        index: 0,
        stack: nextStack,
        currentPage: state.nextPage,
        nextPage: nextPage(nextStack, 0).page,
        previousPage: state.currentPage,
      };
    case 'PREVIOUS_PAGE':
      const index = peek(state.stack);
      const previousStack = pop(state.stack);
      return {
        index,
        stack: previousStack,
        currentPage: state.previousPage,
        nextPage: state.currentPage,
        previousPage: previousPage(previousStack).page,
      };
    case 'SET_NEXT_INDEX':
      return {
        ...state,
        index: action.index,
        nextPage: nextPage(state.stack, action.index).page,
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
});
