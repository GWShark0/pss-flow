import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = state => state;

const ConfirmationPage = connect(mapStateToProps)(Confirmation);

export default ConfirmationPage;
