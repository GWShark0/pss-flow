export const INDEX_PAGE = {
  name: 'index',
  pathname: '/',
  form: [],
};

export const BRIEF_PAGE = {
  name: 'brief',
  pathname: '/brief',
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

export const CALL_PAGE = {
  name: 'call',
  pathname: '/call',
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

export const CONFIRMATION_PAGE = {
  name: 'confirmation',
  pathname: '/confirmation',
  form: [],
};

export const PACKAGE_PAGE = {
  name: 'package',
  pathname: '/package',
  form: [
    {
      label: 'Package',
      name: 'package',
      required: true,
      value: '',
    },
  ],
};

export const PLAN_PAGE = {
  name: 'plan',
  pathname: '/plan',
  form: [
    {
      label: 'Plan',
      name: 'plan',
      required: true,
      value: '',
    },
  ],
};

export const SWITCH_BRIEF_PAGE = {
  name: 'switchBrief',
  pathname: '/switch-brief',
  form: [],
};

const pages = [
  INDEX_PAGE,
  BRIEF_PAGE,
  CALL_PAGE,
  CONFIRMATION_PAGE,
  PACKAGE_PAGE,
  PLAN_PAGE,
  SWITCH_BRIEF_PAGE,
];

export const PAGES = pages.reduce((result, page) => {
  result[page.name] = page;
  return result;
}, {});

export const FORM = Object.values(pages.reduce((result, page) => {
  for (let field of page.form) {
    if (result[field.name]) {
      result[field.name] = {
        ...field,
        ...result[field.name],
        pages: result[field.name].pages.concat(page.name)
      };
    } else {
      result[field.name] = {
        ...field,
        pages: [page.name]
      };
    }
  }
  return result;
}, {}));

export function getPageFields(form, page) {
  return form.filter(field => field.pages.includes(page));
}

export function getFieldValue(form, name) {
  return (form.find(field => field.name === name) || {}).value;
}

export function pickFields(form, names) {
  return form.filter(field => names.includes(field.name));
}
