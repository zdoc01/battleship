import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import initIo from './src/js/io';
import reducer from './src/js/reducers';
import App from './src/js/components/App';

const logger = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(logger)
);

window.socket = initIo(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('main')
);
