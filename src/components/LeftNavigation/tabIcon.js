import React from 'react'
import { Button, Typography } from '@mui/material'

import styles from "./leftNavigation.style"

const TabIcon = ({
    isOpen,
    currentTab,
    tabName,

    index,
    icon,
    onClick,
}) => {
    return (
        <Button
            sx={[
                styles.icBox,
                currentTab == index && styles.choosenIc,
                isOpen && {
                    justifyContent: "start",
                    pl: index == currentTab ? "29px" : "30px",
                    pr: 0,
                }
            ]}
            onClick={onClick}
            color={"black"}
        >
            <img src={icon} style={styles.tabIc} />

            {
                isOpen &&
                <Typography
                    sx={styles.tabName}
                >
                    {tabName}
                </Typography>
            }

        </Button>
    )
}

export default TabIcon