import get from 'lodash/get';
import zipWith from 'lodash/zipWith';
import flatten from 'lodash/flatten';
import pages from './pages';

export const FLOW_TREE = {
	page: pages.SWITCH_FLOW,
	children: [
		{
			page: pages.CALL,
			children: [
				{
					page: pages.SWITCH_BRIEF,
					children: [
						{
							page: pages.PACKAGE,
							children: [
								{
									page: pages.PLAN,
									children: [
										{
											page: pages.CONFIRMATION,
											children: [],
										},
									],
								},
							],
						},
            {
							page: pages.BRIEF,
							children: [
								{
									page: pages.PACKAGE,
									children: [
										{
											page: pages.PLAN,
											children: [
												{
													page: pages.CONFIRMATION,
													children: [],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			page: pages.BRIEF,
			children: [
				{
					page: pages.CALL,
					children: [
						{
							page: pages.PACKAGE,
							children: [
								{
									page: pages.PLAN,
									children: [
										{
											page: pages.CONFIRMATION,
											children: [],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			page: pages.PACKAGE,
			children: [
				{
					page: pages.PLAN,
					children: [
						{
							page: pages.CALL,
							children: [
								{
									page: pages.SWITCH_BRIEF,
									children: [
                    {
											page: pages.CONFIRMATION,
											children: [],
										},
										{
											page: pages.BRIEF,
											children: [
												{
													page: pages.CONFIRMATION,
													children: [],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}

export function push(stack = [], index = 0) {
  return stack.concat(index);
}

export function pop(stack = []) {
  return stack.slice(0, -1);
}

export function peek(stack = []) {
  return stack[stack.length - 1];
}

export function isEmpty(stack = []) {
  return stack.length === 0;
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
