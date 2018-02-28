import { connect } from 'react-redux';
import { changePlan } from '../actions';
import Plan from '../components/Plan';

const mapStateToProps = ({ plan }) => ({ plan });

const mapDispatchToProps = (dispatch) => ({
  onPlanChange: (plan) => {
    dispatch(changePlan(plan));
  }
});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
