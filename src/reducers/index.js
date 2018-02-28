import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getFlow } from '../util/paths';

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
    default:
      return state;
  }
}

function flow(state = getFlow(), action) {
  switch (action.type) {
    case 'CHANGE_FLOW':
      return getFlow(action.key);
    default:
      return state;
  }
}

function plan(state = '', action) {
  switch (action.type) {
    case 'CHANGE_PLAN':
      return action.plan;
    default:
      return state;
  }
}

function time(state = '', action) {
  switch (action.type) {
    case 'CHANGE_TIME':
      return action.time;
    default:
      return state;
  }
}

export default combineReducers({
  brief,
  flow,
  plan,
  time,
  routing: routerReducer,
});
