import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux imports 
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the whole app w/ the redux provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

