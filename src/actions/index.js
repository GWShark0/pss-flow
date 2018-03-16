export const next = () => ({ type: 'NEXT_PAGE' });

export const previous = () => ({ type: 'PREVIOUS_PAGE' });

export const setNextIndex = index => ({
  type: 'SET_NEXT_INDEX',
  index,
});

export const changeField = (name, value) => ({
  type: 'CHANGE_FIELD',
  name,
  value,
});

export const showErrors = () => ({ type: 'SHOW_ERRORS' });

export const reset = () => ({ type: 'RESET' });
