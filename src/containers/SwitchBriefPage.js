import { connect } from 'react-redux';
import { setNextIndex}  from '../actions'
import SwitchBrief from '../components/SwitchBrief';

const mapStateToProps = state => ({
  flowIndex: state.flow.index,
});

const mapDispatchToProps = dispatch => ({
  setNextIndex: index => dispatch(setNextIndex(index)),
});

const SwitchBriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwitchBrief);

export default SwitchBriefPage;
