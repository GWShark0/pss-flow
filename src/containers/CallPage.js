import { connect } from 'react-redux';
import { changeTime } from '../actions';
import Call from '../components/Call';

const mapStateToProps = ({ time }) => ({ time });

const mapDispatchToProps = (dispatch) => ({
  onTimeChange: (time) => {
    dispatch(changeTime(time));
  }
});

const CallPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Call);

export default CallPage;
