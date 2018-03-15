import pages from './pages';

export const BRIEF = {
  name: pages.BRIEF,
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
  name: pages.CALL,
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
  name: pages.PACKAGE,
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
  name: pages.PLAN,
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
    const form = page.form.map(field => ({ ...field, pagename: page.name }));
    return result.concat(form);
  }, []);
}

export const FORM = spreadPages([BRIEF, CALL, PACKAGE, PLAN]);

export function getPageFields(form, pagename) {
  return form.filter(field => field.pagename === pagename);
}

export function getFieldValue(form, name) {
  return (form.find(field => field.name === name) || {}).value;
}

export function pickFields(form, names) {
  return form.filter(field => names.includes(field.name));
}
