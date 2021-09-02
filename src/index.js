import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core'
import App from './App.jsx';
import './index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: "#00883a"
		},
		secondary: {
			main: "#55af33"
		},
	},
	
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
);