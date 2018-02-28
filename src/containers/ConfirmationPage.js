import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = (state) => ({
  brief: state.brief,
  plan: state.plan,
  time: state.time,
});

const ConfirmationPage = connect(mapStateToProps)(Confirmation);

export default ConfirmationPage;
