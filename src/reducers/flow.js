import { push, pop, peek, currentPage, nextPage, previousPage } from '../util/flow';

const INITIAL_INDEX = 0;
const INITIAL_FLOW = {
  index: INITIAL_INDEX,
  stack: [],
  currentPage: currentPage([]).page,
  nextPage: nextPage([], INITIAL_INDEX).page,
  previousPage: previousPage([]).page,
};

function flow(state = INITIAL_FLOW, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      const nextStack = push(state.stack, state.index);
      return {
        index: INITIAL_INDEX,
        stack: nextStack,
        currentPage: state.nextPage,
        nextPage: nextPage(nextStack, INITIAL_INDEX).page,
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
      return INITIAL_FLOW;
    default:
      return state;
  }
}

export default flow;
