import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import React from 'react';

import { AppBar } from './components';
import { getDesignTokens } from './theme';

function App() {
	const { state } = useStateMachine();

	const theme = React.useMemo(
		() => createTheme(getDesignTokens(state.theme as PaletteMode)),
		[state.theme],
	);
	return (
		<ThemeProvider theme={theme}>
			<AppBar />
		</ThemeProvider>
	);
}

export default App;
