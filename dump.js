const initialBrief = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Your Name',
    type: 'text',
    value: '',
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Your Email',
    type: 'email',
    value: '',
  },
];

function brief(state = initialBrief, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return state.map(field =>
        (field.name === action.name)
          ? { ...field, value: action.value }
          : field
      );
    case 'RESET':
      return initialBrief;
    default:
      return state;
  }
}

function flow(state = getFlow(), action) {
  switch (action.type) {
    case 'CHANGE_FLOW':
      return getFlow(action.key);
    case 'RESET':
      return getFlow();
    default:
      return state;
  }
}

function plan(state = '', action) {
  switch (action.type) {
    case 'CHANGE_PLAN':
      return action.plan;
    case 'RESET':
      return '';
    default:
      return state;
  }
}

function time(state = '', action) {
  switch (action.type) {
    case 'CHANGE_TIME':
      return action.time;
    case 'RESET':
      return '';
    default:
      return state;
  }
}



import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';
import { validateFlow } from './validation';

export const BRIEF_PAGE = {
  name: 'brief',
  form: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      type: 'text',
      value: '',
      required: true,
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Your Email',
      type: 'email',
      value: '',
      required: true,
    },
  ],
};

export const CALL_PAGE = {
  name: 'call',
  form: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      type: 'text',
      value: '',
      required: true,
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Your Email',
      type: 'email',
      value: '',
      required: true,
    },
    {
      name: 'time',
      value: '',
      required: true,
    },
  ],
};

export const CONFIRMATION_PAGE = {
  name: 'confirmation',
  form: [],
};

export const PACKAGE_PAGE = {
  name: 'package',
  form: [
    {
      name: 'package',
      value: '',
      required: true,
    },
  ],
};

export const PLAN_PAGE = {
  name: 'plan',
  form: [
    {
      name: 'plan',
      value: '',
      required: true,
    },
  ],
};

export const FLOWS = {
  default: [
    PACKAGE_PAGE,
    PLAN_PAGE,
    CALL_PAGE,
    BRIEF_PAGE,
    CONFIRMATION_PAGE,
  ],
};

export function getFlow(key) {
  switch (key) {
    case 'callFirst':
      return FLOWS.callFirst;
    default:
      return FLOWS.default;
  }
}

export function getForm(flow = []) {
  const form = flow.reduce((result, page) => {
    const form = page.form.map(field => ({ ...field, page: page.name}));
    return result.concat(form);
  }, []);

  return groupBy(form, 'name');
}

export function getFirstPath(flow = []) {
  return (flow[0] || {}).name;
}

export function getLastPath(flow = []) {
  return (flow[flow.length - 1] || {}).name;
}

export function getPathIndex(flow = [], name) {
  return findIndex(flow, { name });
}

export function getPreviousPath(flow = [], currentPathName) {
  const index = getPathIndex(flow, currentPathName);
  return get(flow, `${index - 1}.name`);
}

export function getNextPath(flow = [], currentPathName) {
  const index = getPathIndex(flow, currentPathName);
  return get(flow, `${index + 1}.name`);
}

export function isPathBefore(path, currentPath) {

}

export function isPathAfter(path, currentPath) {

}



export const changeField = (name, value) => ({
  type: 'CHANGE_FIELD',
  name,
  value,
});

export const changeFlow = (key) => ({
  type: 'CHANGE_FLOW',
  key,
});

export const changeTime = (time) => ({
  type: 'CHANGE_TIME',
  time,
});

export const changePlan = (plan) => ({
  type: 'CHANGE_PLAN',
  plan,
});

export const reset = () => ({ type: 'RESET' });
