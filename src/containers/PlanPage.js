import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getPageFields } from '../util/form';
import Plan from '../components/Plan';

const mapStateToProps = state => ({
  form: getPageFields(state.form, 'plan'),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
