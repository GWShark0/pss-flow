import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { getPreviousPath, getNextPath } from '../util/paths';

const mapStateToProps = (state) => {
  const { pathname, search } = state.routing.location;
  const flow = state.flow;
  const previousPath = getPreviousPath(flow, pathname);
  const nextPath = getNextPath(flow, pathname);
  return {
    previousPath: { pathname: previousPath, search },
    nextPath: { pathname: nextPath, search },
  };
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;
