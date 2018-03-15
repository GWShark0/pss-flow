import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';
import { dedupe } from '../util/form';

const mapStateToProps = state => ({
  form: dedupe(state.form),
});

const mapDispatchToProps = dispatch => ({});

const ConfirmationPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);

export default ConfirmationPage;
