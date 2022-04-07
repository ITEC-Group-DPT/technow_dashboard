import React, { useState, useEffect, useRef } from "react"
import styles from "./authentication.style"
import { Link, useHistory, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import { Input, Button, Typography, CircularProgress, IconButton, InputAdornment, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import validator from 'validator'
import { loginAPI } from "../../api/authenAPI";
import useStore from "../../appStore"
// import { icons } from "../../constant"

const SignInForm = () => {
	const { loginAction } = useStore();

	const navigate = useNavigate();

	const [email, setEmail] = useState({
		value: "",
		error: undefined,
	})
	const [password, setPassword] = useState({
		value: "",
		showPassword: false,
	})
	const [isLoading, setIsLoading] = useState(false);

	const login = () => {

		setIsLoading(true)
		loginAPI(email.value, password.value).then(response => {

			const timeout = setTimeout(() => {
				setIsLoading(false);
			}, 500);

			if (response.data.success) {
				console.log('login success: ', response.data.data);

				const {username } = response.data.data;
				loginAction(username);

				sessionStorage.setItem("username", username);

				clearTimeout(timeout);
				navigate("/")
			} else {
				const { errorEmail, errorPassword } = response.data.data;

				setEmail({ ...email, error: errorEmail })
				setPassword({ ...password, error: errorPassword })
			}
		})
	}
	const signInSubmit = () => {
		if (validator.isEmail(email.value) === false)
			setEmail({ ...email, error: "Email is invalid" })
		else
			login();
	}

	const isRedBorder = (type) => ({
		border: type ? ("1px red solid") : ("none"),
		borderRadius: '10px',
	})

	const onClickRemoveEmailError = () => {
		if (email.error)
			setEmail({ ...email, error: undefined })
	}

	const onClickRemovePasswordError = () => {
		// if (authErrors.password)
		// 	dispatch(removePasswordError())
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			signInSubmit()
		}
	}

	return (
		<Box sx={styles.formContainerLeft}>
			<Box sx={{
				width: "100%",
			}}>
				<Typography sx={styles.title}>Sign in</Typography>
				<Box component="div" sx={styles.socialContainer}>
					<Link to="#" style={styles.socialLink}><i className="fab fa-facebook-f"></i></Link>
					<Link to="#" style={styles.socialLink}><i className="fab fa-google-plus-g"></i></Link>
					<Link to="#" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></Link>
				</Box>
				<Typography component="div" sx={styles.subTitle}>or use your TechNow account</Typography>

				<Input
					sx={isRedBorder(email.error)}
					value={email.value}
					onChange={(e) => setEmail({ ...email, value: e.target.value })}
					onClick={onClickRemoveEmailError}
					onKeyDown={handleKeyDown}
					type="email"
					name="email"
					placeholder="Email"
					disableUnderline
					fullWidth
					inputProps={{ style: styles.input }}
				/>
				<Typography component="div" sx={styles.errorMsg}>
					{email.error}
				</Typography>

				<Input
					sx={{
						...styles.input,
						// ...isRedBorder(authErrors.password)
					}}
					value={password.value}
					onChange={(e) => setPassword({ ...password, value: e.target.value })}
					onClick={onClickRemovePasswordError}
					onKeyDown={handleKeyDown}
					type={password.showPassword ? 'text' : 'password'}
					placeholder="Password"
					disableUnderline
					fullWidth
					inputProps={{ style: { padding: 0 } }}
				/>
				<Typography sx={styles.errorMsg}>
					{password.error}
				</Typography>

				<Box sx={styles.centerBox}>
					<LoadingButton
						onClick={signInSubmit}
						sx={styles.mainButton}
						variant="contained"
						loading={isLoading}
						loadingIndicator={<CircularProgress sx={styles.loadingIndicator} size={18} />}
					>Sign In
					</LoadingButton>
				</Box>
			</Box>
		</Box>
	)
}

export default SignInForm;
