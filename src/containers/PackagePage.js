import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import Package from '../components/Package';

const mapStateToProps = state => ({
  showErrors: state.showErrors,
  form: getFieldsByPage(state.form, state.flow.currentPage),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PackagePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Package);

export default PackagePage;
