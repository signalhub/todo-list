import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import App from './src/containers/App';
import './app.styl';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);