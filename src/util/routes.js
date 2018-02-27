import BriefPage from '../components/BriefPage';
import CallPage from '../components/CallPage';
import ConfirmationPage from '../components/ConfirmationPage';
import PlanPage from '../components/PlanPage';

import { BRIEF, CALL, CONFIRMATION, PLAN } from './paths';

export default [
  {
    path: BRIEF,
    page: BriefPage,
  },
  {
    path: CALL,
    page: CallPage,
  },
  {
    path: CONFIRMATION,
    page: ConfirmationPage,
  },
  {
    path: PLAN,
    page: PlanPage,
  },
];
