import uniqBy from 'lodash/uniqBy';
import pages from './pages';

export const BRIEF = {
  page: pages.BRIEF,
  form: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
      type: 'text',
      value: '',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Your Email',
      required: true,
      type: 'email',
      value: '',
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: 'Your Phone',
      type: 'phone',
      value: '',
    },
  ],
};

export const CALL = {
  page: pages.CALL,
  form: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
      type: 'text',
      value: '',
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: 'Your Phone',
      required: true,
      type: 'phone',
      value: '',
    },
    {
      label: 'Time',
      name: 'time',
      required: true,
      value: '',
    },
  ],
};

export const PACKAGE = {
  page: pages.PACKAGE,
  form: [
    {
      label: 'Package',
      name: 'package',
      required: true,
      value: '',
    },
  ],
};

export const PLAN = {
  page: pages.PLAN,
  form: [
    {
      label: 'Plan',
      name: 'plan',
      required: true,
      value: '',
    },
  ],
};

function spreadPages(pages) {
  return pages.reduce((result, page) => {
    const form = page.form.map(field => ({ ...field, page: page.page }));
    return result.concat(form);
  }, []);
}

export function getFieldsByPage(form, page) {
  return form.filter(field => field.page === page);
}

export function getFieldValue(form, name) {
  return (form.find(field => field.name === name) || {}).value;
}

export function pickFields(form, names) {
  return form.filter(field => names.includes(field.name));
}

export function dedupe(form) {
  return uniqBy(form, 'name');
}

export const FORM = spreadPages([BRIEF, CALL, PACKAGE, PLAN]);
