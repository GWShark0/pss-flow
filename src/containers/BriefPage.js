import { connect } from 'react-redux';
import { changeField } from '../actions';
import { getFieldsByPage } from '../util/form';
import pages from '../util/pages';
import Brief from '../components/Brief';

const mapStateToProps = state => ({
  form: getFieldsByPage(state.form, pages.BRIEF),
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(changeField(name, value)),
});

const BriefPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brief);

export default BriefPage;
