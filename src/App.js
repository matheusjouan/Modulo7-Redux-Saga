import React from 'react';

import './config/ReactotronConfig';

import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import history from './services/history';

import store from './store/index';
import Routes from './routes';

import GlobalStyles from './styles/global';

import Header from './componets/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
