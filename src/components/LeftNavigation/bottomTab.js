import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material';
// import Button from '@mui/material/ButtonBase';


import styles from "./leftNavigation.style"
import {
    VersionIc,
    LogOutIc,
} from "../../constant/icon"

const BottomTab = ({ isOpen }) => {
    return (
        <Box
            sx={styles.bottomBox}>
            <Box
                sx={[
                    styles.bottomIc,
                    isOpen && {
                        justifyContent: "start",
                        alignItems: "center",
                        pl: "23px",
                        pr: 0,
                    }
                ]}
            >
                <img src={VersionIc} width={38} height={38} />
                {
                    isOpen &&
                    <Typography
                        sx={[styles.tabName, {
                            fontWeight: "600",
                            color: "#8B8B8B",
                            marginLeft: "38px",
                            lineHeight: "24px",
                        }]}
                    >
                        Version 1.0.0
                    </Typography>
                }
            </Box>

            <Button
                sx={[
                    styles.bottomIc,
                    isOpen && {
                        justifyContent: "start",
                        pl: "32px",
                    }
                ]}
                color={"error"}
                // disableRipple
            >
                <img src={LogOutIc} width={20} height={20} />
                {
                    isOpen &&
                    <Typography
                        sx={[styles.tabName, {
                            fontWeight: "600",
                            color: "#FF5454",
                            marginLeft: "50px",
                            lineHeight: "20px",
                            pr: 0,
                        }]}
                    >
                        Logout
                    </Typography>
                }
            </Button>
        </Box>
    )
}

export default BottomTab