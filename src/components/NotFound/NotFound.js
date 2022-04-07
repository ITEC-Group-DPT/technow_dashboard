import React from 'react';
import styles from './NotFound.styles';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import notFound from "../../assets/not-found.png"
import { useNavigate } from 'react-router-dom';

const NotFound = ({ notLogin = false }) => {

	const navigate = useNavigate();
	return (
		<Box sx={styles.wrapper}>
			<img
				style={{
					width: "65%",
					height: "65%",
				}}
				src={notFound}
			/>
			<Button
				onClick={() => navigate(notLogin ? "/authentication" : "/")}

				variant="contained"
				sx={{ ...styles.button }}
			>
				{notLogin ? "Sign In" : "Back To Home"}
			</Button>
		</Box>
	);
};

export default NotFound;
