export const nextPage = () => ({ type: 'NEXT_PAGE' });

export const previousPage = () => ({ type: 'PREVIOUS_PAGE' });

export const reset = () => ({ type: 'RESET' });

export const setNextIndex = index => ({
  type: 'SET_NEXT_INDEX',
  index,
});

export const changeField = (name, value) => ({
  type: 'CHANGE_FIELD',
  name,
  value,
});
