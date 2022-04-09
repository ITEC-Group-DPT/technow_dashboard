import { Button, Fade, Slide, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useStore from '../../appStore'

import styles from "./leftNavigation.style"

const OpenNav = ({
    isOpen,
    tabNames,
    username = "Admin",
    currentTab,
    navigateTab,
}) => {

    const { logoutAction } = useStore();
    return (
        <Slide
            in={isOpen}
            timeout={280}
            direction="right"
        >
            <Box
                sx={styles.openContainer}
            >

                <Typography
                    sx={styles.username}
                >
                    {username}
                </Typography>


                {
                    tabNames.map((name, index) => (
                        <Button
                            key={`${name}_${index}}`}
                            sx={[styles.tabNameBox,
                            currentTab == index
                                ? { background: "rgba(0,0,0,0.03)" }
                                : {
                                    "&.MuiButtonBase-root:hover": {
                                        bgcolor: "transparent"
                                    }
                                }
                            ]}
                            color="black"
                            // disableRipple
                            onClick={() => navigateTab(index)}
                        >
                            <Typography
                                sx={styles.tabName}
                            >
                                {name}
                            </Typography>
                        </Button>
                    ))
                }

                <Box
                    sx={[styles.bottomBox, {
                        paddingLeft: "10px",
                    }]}>
                    <Box
                        sx={styles.bottomTextBox}
                    >
                        <Typography
                            sx={[styles.tabName, styles.versionText]}
                        >
                            Version 1.0.0
                        </Typography>
                    </Box>

                    <Button
                        sx={styles.bottomTextBox}
                        color={"error"}
                        onClick={() => {
                            sessionStorage.clear();
                            logoutAction()
                        }}
                    // disableRipple
                    >
                        <Typography
                            sx={[styles.tabName, styles.logoutText]}
                        >
                            Logout
                        </Typography>
                    </Button>
                </Box>

            </Box>
        </Slide>
    )
}

export default OpenNav;