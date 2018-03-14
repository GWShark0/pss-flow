export const BRIEF = {
  name: 'brief',
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
  name: 'call',
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

export const CONFIRMATION = {
  name: 'confirmation',
  form: [],
};

export const PACKAGE = {
  name: 'package',
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
  name: 'plan',
  form: [
    {
      label: 'Plan',
      name: 'plan',
      required: true,
      value: '',
    },
  ],
};

const pages = [
  BRIEF,
  CALL,
  CONFIRMATION,
  PACKAGE,
  PLAN,
];

export const FORM = pages.reduce((result, page) => {
  const form = page.form.map(field => ({ ...field, pagename: page.name }));
  return result.concat(form);
}, []);

export function getPageFields(form, pagename) {
  return form.filter(field => field.pagename === pagename);
}

export function getFieldValue(form, name) {
  return (form.find(field => field.name === name) || {}).value;
}

export function pickFields(form, names) {
  return form.filter(field => names.includes(field.name));
}
