import uniqBy from 'lodash/uniqBy';
import pages from './pages';

export const BRIEF = {
  page: pages.BRIEF,
  form: [
    {
      feedback: 'Please provide your name.',
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
      type: 'text',
      value: '',
    },
    {
      feedback: 'Please provide a valid email address.',
      label: 'Email',
      name: 'email',
      placeholder: 'Your Email',
      required: true,
      type: 'email',
      value: '',
    },
    {
      feedback: 'Please provide a valid phone number.',
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
      feedback: 'Please provide your name.',
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
      type: 'text',
      value: '',
    },
    {
      feedback: 'Please provide a valid phone number.',
      label: 'Phone',
      name: 'phone',
      placeholder: 'Your Phone',
      required: true,
      type: 'phone',
      value: '',
    },
    {
      feedback: 'Please select a time for your call.',
      label: 'Time',
      name: 'time',
      options: ['1:00 PM', '2:00 PM', '3:00 PM'],
      required: true,
      value: '',
    },
  ],
};

export const PACKAGE = {
  page: pages.PACKAGE,
  form: [
    {
      feedback: 'Please choose a package.',
      label: 'Package',
      name: 'package',
      options: ['basic', 'standard', 'pro'],
      required: true,
      value: '',
    },
  ],
};

export const PLAN = {
  page: pages.PLAN,
  form: [
    {
      feedback: 'Please choose a plan.',
      label: 'Plan',
      name: 'plan',
      options: ['monthly', 'annual'],
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

export function getFieldsByPage(form = [], pages) {
  pages = [].concat(pages);
  return form.filter(field => pages.includes(field.page));
}

export function getFieldsByName(form = [], names) {
  names = [].concat(names);
  return form.filter(field => names.includes(field.name));
}

export function getFieldByName(form = [], name) {
  return form.find(field => field.name === name) || {};
}

export function getValueByName(form, name) {
  return getFieldByName(form, name).value;
}

export function dedupe(form) {
  return uniqBy(form, 'name');
}

export const FORM = spreadPages([BRIEF, CALL, PACKAGE, PLAN]);
