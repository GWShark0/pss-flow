import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getPageFields } from '../util/form';
import Call from '../components/Call';

const mapStateToProps = state => ({
  form: getPageFields(state.form, 'call'),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const CallPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Call);

export default CallPage;
