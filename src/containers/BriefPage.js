import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import Brief from '../components/Brief';

const mapStateToProps = state => ({
  showErrors: state.showErrors,
  form: getFieldsByPage(state.form, state.flow.currentPage),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const BriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brief);

export default BriefPage;
