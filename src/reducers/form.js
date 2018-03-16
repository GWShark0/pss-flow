import { FORM } from '../util/form';
import { validateField, validateForm } from '../util/validation';

const INITIAL_FORM = validateForm(FORM);

function form(state = INITIAL_FORM, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return state.map(field => {
        if (field.name === action.name) {
          return validateField({
            ...field,
            value: action.value,
          });
        }
        return field;
      });
    case 'RESET':
      return INITIAL_FORM;
    default:
      return state;
  }
}

export default form;
