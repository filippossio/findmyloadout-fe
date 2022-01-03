import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
	AppBar as MuiAppBar,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { GlobalState, useStateMachine } from 'little-state-machine';
import React from 'react';

function updateTheme(state: GlobalState, payload: string) {
	return { ...state, theme: payload };
}

const AppBar: React.FC = () => {
	const { actions, state } = useStateMachine({ updateTheme });
	return (
		<Box sx={{ flexGrow: 1 }}>
			<MuiAppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Find my loadout
					</Typography>
					<IconButton
						onClick={() =>
							actions.updateTheme(state.theme === 'light' ? 'dark' : 'light')
						}
					>
						{state.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
					</IconButton>
				</Toolbar>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
