import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './components/AccountMenu';
import BasicForm from './components/BasicForm';
import TodoTable from './components/TodoTable';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	return (
		<Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} openForm={openForm} />
			{openForm && <BasicForm />}
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h4" align="center" gutterBottom>
					React Skills test
				</Typography>
			</Box>
			<TodoTable />
		</Container>
	);
}
