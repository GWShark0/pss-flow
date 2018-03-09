import { connect } from 'react-redux';
import Call from '../components/Call';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const CallPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Call);

export default CallPage;
