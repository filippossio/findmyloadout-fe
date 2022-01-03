import { createStore, StateMachineProvider } from 'little-state-machine';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

createStore(
	{
		theme: 'light',
	},
	{},
);

ReactDOM.render(
	<React.StrictMode>
		<StateMachineProvider>
			<App />
		</StateMachineProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
