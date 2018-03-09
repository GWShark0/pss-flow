import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { nextPage, previousPage } from '../actions';

const mapStateToProps = state => {
  return {
    nextPage: state.flow.nextPage,
    previousPage: state.flow.previousPage,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
