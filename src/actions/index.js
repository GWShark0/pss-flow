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
