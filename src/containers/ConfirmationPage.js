import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = state => ({ form: state.form });

const ConfirmationPage = connect(mapStateToProps)(Confirmation);

export default ConfirmationPage;
