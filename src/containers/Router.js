import React from 'react';
import { connect } from 'react-redux';

import BriefPage from '../containers/BriefPage';
import CallPage from '../containers/CallPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import PackagePage from '../containers/PackagePage';
import PlanPage from '../containers/PlanPage';
import SwitchBriefPage from '../containers/SwitchBriefPage';
import SwitchFlow from '../containers/SwitchFlowPage';

function switchRoute(page) {
  switch (page) {
    case 'switch-flow':
      return SwitchFlow;
    case 'brief':
      return BriefPage;
    case 'call':
      return CallPage;
    case 'confirmation':
      return ConfirmationPage;
    case 'package':
      return PackagePage;
    case 'plan':
      return PlanPage;
    case 'switch-brief':
      return SwitchBriefPage;
    default:
      return () => {};
  }
}

function Router(props) {
  const Page = switchRoute(props.page);
  return <Page />;
}

const mapStateToProps = state => ({
  page: state.flow.currentPage,
});

export default connect(mapStateToProps)(Router);
