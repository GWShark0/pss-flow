import { FLOW_TREE, push, pop, peek, indexFromPage,
  currentPage, nextPage, previousPage, isNextPage, isPreviousPage, } from '../flow';

it('flow', () => {

  let stack = [];

  const result = indexFromPage(stack, '/package')

  console.log(result);
});
