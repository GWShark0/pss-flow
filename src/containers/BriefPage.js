import { connect } from 'react-redux';
import Brief from '../components/Brief';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const BriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brief);

export default BriefPage;
