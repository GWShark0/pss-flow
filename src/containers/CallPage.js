import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import pages from '../util/pages';
import Call from '../components/Call';

const mapStateToProps = state => ({
  form: getFieldsByPage(state.form, pages.CALL),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const CallPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Call);

export default CallPage;
