import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
