import { connect } from 'react-redux';
import { changeField } from '../actions';
import Brief from '../components/Brief';

const mapStateToProps = ({ brief }) => ({ brief });

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => {
    dispatch(changeField(name, value));
  }
});

const BriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brief);

export default BriefPage;
