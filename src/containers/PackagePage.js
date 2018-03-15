import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import pages from '../util/pages';
import Package from '../components/Package';

const mapStateToProps = state => ({
  form: getFieldsByPage(state.form, pages.PACKAGE),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const PackagePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Package);

export default PackagePage;
