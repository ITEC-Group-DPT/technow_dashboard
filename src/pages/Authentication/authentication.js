import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Slide, Fade, Typography, useMediaQuery } from '@mui/material';
import { useHistory } from 'react-router-dom';
import SignInForm from './SignInForm';
import styles from './authentication.style';
import { Box } from '@mui/system';

const Authentication = () => {
    // const user = useSelector(userInfoSelector)
    // const history = useHistory()

    // if (user.isEmpty !== true) {
    //     history.push("/");
    // }

    const minWidth = useMediaQuery('(min-width:900px)')


    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Box sx={styles.main}>
            <Box sx={styles.container}>
                {
                    minWidth &&
                    <Box sx={styles.overlayRight}>
                        <Typography variant="h1" sx={styles.overlayTitle}>Welcome Back!
                        </Typography>
                        <Typography sx={styles.overlaySubTitle} variant="p">Login to start analyse your website statistic data

                        </Typography>
                    </Box>
                }

                <SignInForm
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                />

            </Box>
            <img
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                }}
                src={require("../../assets/left_wing.png")}
            />
        </Box>
    )
}

export default Authentication;
