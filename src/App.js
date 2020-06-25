import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Store } from './store';
import { Routes } from './routes'
import { GlobalStyles, theme } from './styles';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Store>
				<Routes />
			</Store>
		</ThemeProvider>
	);
}

export default App;
