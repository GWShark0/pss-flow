import { connect } from 'react-redux';
import { next, previous, showErrors, reset }  from '../actions';
import { getFieldsByPage } from '../util/form';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  form: getFieldsByPage(state.form, state.flow.currentPage),
  nextPage: state.flow.nextPage,
  previousPage: state.flow.previousPage,
});

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
  showErrors: () => dispatch(showErrors()),
  reset: () => dispatch(reset())
});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
