import { connect } from 'react-redux';
import queryString from 'query-string';
import { changeFlow } from '../actions';
import Index from '../components/Index';
import { getFirstPath, getFlow } from '../util/paths';

const mapStateToProps = (state) => {
  const search = state.routing.locationBeforeTransitions.search;
  const query = queryString.parse(search);
  const flowKey = query.flow || '';
  const flow = flowKey ? getFlow(flowKey) : state.flow;
  return {
    firstPath: getFirstPath(flow),
    flowKey,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onFlowChange: (key) => {
    dispatch(changeFlow(key));
  }
});

const IndexPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);

export default IndexPage;
