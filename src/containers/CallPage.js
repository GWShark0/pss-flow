import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import Call from '../components/Call';

const mapStateToProps = state => ({
  showErrors: state.showErrors,
  form: getFieldsByPage(state.form, state.flow.currentPage),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const CallPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Call);

export default CallPage;
