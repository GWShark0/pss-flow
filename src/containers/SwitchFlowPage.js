import { connect } from 'react-redux';
import { setNextIndex }  from '../actions';
import SwitchFlow from '../components/SwitchFlow';

const mapStateToProps = state => ({
  flowIndex: state.flow.index,
});

const mapDispatchToProps = dispatch => ({
  setNextIndex: index => dispatch(setNextIndex(index)),
});

const SwitchFlowPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwitchFlow);

export default SwitchFlowPage;
