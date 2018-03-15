import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import pages from '../util/pages';
import Plan from '../components/Plan';

const mapStateToProps = state => ({
  form: getFieldsByPage(state.form, pages.PLAN),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plan);

export default PlanPage;
