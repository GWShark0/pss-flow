import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getPageFields } from '../util/form';
import pages from '../util/pages';
import Plan from '../components/Plan';

const mapStateToProps = state => ({
  form: getPageFields(state.form, pages.PLAN),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
