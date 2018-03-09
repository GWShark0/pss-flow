import {
  validateForm,
  isValidForm,
  validateFlow,
  isValidPath,
} from '../validation';

const VALID_FORM = [
  {
    value: 'a',
  },
  {
    value: 'b',
    required: true,
  },
];

const INVALID_FORM = [
  {
    value: 'a',
  },
  {
    value: '', // required and empty
    required: true,
  },
];

const FINISHED_FLOW = [
  {
    name: 'a',
    form: [
      {
        name: 'x',
        value: 'x',
        required: true,
      }
    ],
  },
  {
    name: 'b',
    form: [
      {
        name: 'y',
        value: 'y',
        required: true,
      }
    ],
  },
  {
    name: 'c',
    form: [],
  },
];

const INCOMPLETE_FLOW = [
  {
    name: 'a',
    form: [
      {
        name: 'x',
        value: 'x',
        required: true,
      }
    ],
  },
  {
    name: 'b',
    form: [
      {
        name: 'y',
        value: '', // required and empty
        required: true,
      }
    ],
  },
  {
    name: 'c',
    form: [],
  },
];


describe('validateForm()', () => {
  it('should validate a valid form', () => {
    expect(validateForm(VALID_FORM)).toEqual([
      { value: 'a', valid: true },
      { value: 'b', required: true, valid: true },
    ]);
  });

  it('should validate an invalid form', () => {
    expect(validateForm(INVALID_FORM)).toEqual([
      { value: 'a', valid: true },
      { value: '', required: true, valid: false },
    ]);
  });
});

describe('isValidForm()', () => {
  it('should return true for a valid form', () => {
    expect(isValidForm(VALID_FORM)).toBe(true);
  });

  it('should return false for an invalid form', () => {
    expect(isValidForm(INVALID_FORM)).toBe(false);
  });
});


describe('validateFlow()', () => {
  it('should validate a finished flow', () => {
    const flow = validateFlow(FINISHED_FLOW)

    expect(flow[0].valid).toBe(true);
    expect(flow[1].valid).toBe(true);
    expect(flow[2].valid).toBe(true);
  });

  it('should validate an incomplete flow', () => {
    const flow = validateFlow(INCOMPLETE_FLOW)

    expect(flow[0].valid).toBe(true);
    expect(flow[1].valid).toBe(false);
    expect(flow[2].valid).toBe(true);
  });
});

describe('isValidPath()', () => {
  it('should', () => {
    const result = isValidPath(FINISHED_FLOW, 'd')
  });
});
