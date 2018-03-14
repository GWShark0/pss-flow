import get from 'lodash/get';
import zipWith from 'lodash/zipWith';
import flatten from 'lodash/flatten';

export const BRIEF = '/brief';
export const CALL = '/call';
export const CONFIRMATION = '/confirmation';
export const PACKAGE = '/package';
export const PLAN = '/plan';
export const SWITCH_BRIEF = '/switch-brief';
export const SWITCH_FLOW = '/';

export const FLOW_TREE = {
	page: SWITCH_FLOW,
	children: [
		{
			page: CALL,
			children: [
				{
					page: SWITCH_BRIEF,
					children: [
						{
							page: PACKAGE,
							children: [
								{
									page: PLAN,
									children: [
										{
											page: CONFIRMATION,
											children: []
										}
									]
								}
							]
						},
            {
							page: BRIEF,
							children: [
								{
									page: PACKAGE,
									children: [
										{
											page: PLAN,
											children: [
												{
													page: CONFIRMATION,
													children: []
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			page: BRIEF,
			children: [
				{
					page: CALL,
					children: [
						{
							page: PACKAGE,
							children: [
								{
									page: PLAN,
									children: [
										{
											page: CONFIRMATION,
											children: []
										},
									]
								},
							]
						},
					]
				},
			]
		},
		{
			page: PACKAGE,
			children: [
				{
					page: PLAN,
					children: [
						{
							page: CALL,
							children: [
								{
									page: SWITCH_BRIEF,
									children: [
                    {
											page: CONFIRMATION,
											children: []
										},
										{
											page: BRIEF,
											children: [
												{
													page: CONFIRMATION,
													children: []
												},
											]
										},
									]
								},
							]
						},
					]
				},
			]
		},
	]
}

export function isEmpty(stack = []) {
  return stack.length === 0;
}

export function peek(stack = []) {
  return stack[stack.length - 1];
}

export function pop(stack = []) {
  return stack.slice(0, -1);
}

export function push(stack = [], index = 0) {
  return stack.concat(index);
}

export function traversal(stack = []) {
  return flatten(zipWith(stack, index => ['children', index]));
}

export function traverse(stack = []) {
  if (isEmpty(stack)) { return FLOW_TREE; }
  return get(FLOW_TREE, traversal(stack));
}

export function currentPage(stack = []) {
  return traverse(stack);
}

export function nextPage(stack = [], index = 0) {
  return traverse(push(stack, index)) || {};
}

export function previousPage(stack = []) {
  if (isEmpty(stack)) { return {}; }
  return traverse(pop(stack)) || {};
}

export function indexFromPage(stack = [], page) {
  const next = get(currentPage(stack), 'children', []).map(page => page.page);
  return next.indexOf(page);
}

export function isNextPage(stack = [], page) {
  const next = get(currentPage(stack), 'children', []).map(page => page.page);
	return next.includes(page);
}

export function isPreviousPage(stack = [], page) {
  const previous = get(previousPage(stack), 'page');
  return previous === page;
}
