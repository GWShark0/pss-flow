import { BRIEF, CALL, CONFIRMATION, PLAN } from './paths';

const FLOWS = {
  default: [PLAN, CALL, BRIEF, CONFIRMATION],
  callFirst: [CALL, PLAN, CONFIRMATION],
};

export function getFlow(key) {
  switch (key) {
    case 'callFirst':
      return FLOWS.callFirst;
    default:
      return FLOWS.default;
  }
}

export function getFirstPath(flow = []) {
  return flow[0];
}

export function getPreviousPath(flow = [], currentPath) {
  const index = flow.indexOf(currentPath);
  return (index >= 0) ? flow[index - 1] : undefined;
}

export function getNextPath(flow = [], currentPath) {
  const index = flow.indexOf(currentPath);
  return (index >= 0) ? flow[index + 1] : undefined;
}
