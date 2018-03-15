import { FORM } from '../util/form';

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

export default form;
