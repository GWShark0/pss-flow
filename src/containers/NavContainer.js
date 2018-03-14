import { connect } from 'react-redux';
import { reset }  from '../actions';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  nextPage: state.flow.nextPage,
  previousPage: state.flow.previousPage,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(reset())
});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
