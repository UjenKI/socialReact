import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

let reRenderComponent = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

reRenderComponent();

reportWebVitals();
