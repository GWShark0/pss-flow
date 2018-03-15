import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const store = createStore(
  reducer,
  // persistReducer(persistConfig, reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const persistor = persistStore(store);

render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
