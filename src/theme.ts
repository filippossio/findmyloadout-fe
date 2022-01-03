import { PaletteMode } from '@mui/material';

const lightTheme = {
	primary: {
		main: '#05668d',
	},
	secondary: {
		main: '#02c39a',
	},
};

const darkTheme = {};

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light' ? lightTheme : darkTheme),
	},
});

export { getDesignTokens };
