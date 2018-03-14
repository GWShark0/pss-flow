import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getPageFields } from '../util/form';
import Brief from '../components/Brief';

const mapStateToProps = state => ({
  form: getPageFields(state.form, 'brief'),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const BriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brief);

export default BriefPage;
