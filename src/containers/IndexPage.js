import { connect } from 'react-redux';
import { setNextIndex }  from '../actions';
import Index from '../components/Index';

const mapStateToProps = state => ({
  flowIndex: state.flow.index,
});

const mapDispatchToProps = dispatch => ({
  setNextIndex: index => dispatch(setNextIndex(index)),
});

const IndexPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);

export default IndexPage;
