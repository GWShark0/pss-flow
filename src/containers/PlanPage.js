import { connect } from 'react-redux';
import Plan from '../components/Plan';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
