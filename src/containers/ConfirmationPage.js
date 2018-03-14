import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = state => ({
  form: state.form
});

const mapDispatchToProps = dispatch => ({});

const ConfirmationPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);

export default ConfirmationPage;
