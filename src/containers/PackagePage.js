import { connect } from 'react-redux';
import Package from '../components/Package';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const PackagePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Package);

export default PackagePage;
