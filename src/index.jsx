import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import App from './Text/App';
// import App from './SvgMatrix/App';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
  <AppContainer>
    <App name='igoist' />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
