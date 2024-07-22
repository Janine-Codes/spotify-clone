import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: '1',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img
				src="/profilbild-linkedin-headshot.png"
				alt="Janine"
				style={{ maxWidth: '8%', maxHeight: '8%', borderRadius: '50%' }}
			/>
			<Button size="large" variant="contained" href="">
				Kontakta mig!
			</Button>
		</Box>
	);
};

export default Home;
