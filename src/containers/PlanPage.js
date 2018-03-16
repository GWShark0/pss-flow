import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import Plan from '../components/Plan';

const mapStateToProps = state => ({
  showErrors: state.showErrors,
  form: getFieldsByPage(state.form, state.flow.currentPage),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
