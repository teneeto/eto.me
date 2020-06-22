import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyles, theme } from './styles';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
