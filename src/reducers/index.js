import { combineReducers } from 'redux';
import flow from './flow';
import form from './form';
import showErrors from './showErrors';

export default combineReducers({ flow, form, showErrors });
