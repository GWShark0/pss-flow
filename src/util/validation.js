import validator from 'validator';
import { getPathIndex } from './paths';

function isEmpty(str) {
  return validator.isEmpty(str);
}

function isEmail(str) {
  return validator.isEmail(str);
}

function isValidField(field = {}) {
  const { required, type, value = '' } = field;

  if (required && isEmpty(value)) { return false; }
  if (type === 'email' && !isEmail(value)) { return false; }

  return true;
}

export function validateForm(form = []) {
  return form.map(field => ({ ...field, valid: isValidField(field) }));
}

export function isValidForm(form) {
  return validateForm(form).reduce((result, field) => {
    return result && field.valid;
  }, true);
}

export function validateFlow(flow = []) {
  return flow.map(path => ({ ...path, valid: isValidForm(path.form) }))
}

export function isValidPath(flow, pathName) {
  const index = getPathIndex(flow, pathName);

  if (index === -1) { return false; }

  return validateFlow(flow.slice(0, index)).reduce((result, page) => {
    return result && page.valid;
  }, true);
}
