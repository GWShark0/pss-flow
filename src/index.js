import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducer,
  // persistReducer(persistConfig, reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware),
);

// const persistor = persistStore(store);

render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router history={history}>
        <App />
      </Router>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
