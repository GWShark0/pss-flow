import validator from 'validator';

function isEmpty(str) {
  return validator.isEmpty(str);
}

function isEmail(str) {
  return validator.isEmail(str);
}

function isPhone(str) {
  return validator.isLength(str, 10);
}

export function isValidField(field = {}) {
  const { required, type, value = '' } = field;

  if (required && isEmpty(value)) { return false; }
  if (type === 'email' && !isEmail(value)) { return false; }
  if (type === 'phone' && !isPhone(value)) { return false; }

  return true;
}

export function validateField(field = {}) {
  return {
    ...field,
    valid: isValidField(field),
  };
}

export function validateForm(form = []) {
  return form.map(field => ({ ...field, valid: isValidField(field) }));
}

export function isValidForm(form) {
  return validateForm(form).reduce((result, field) => {
    return result && field.valid;
  }, true);
}
