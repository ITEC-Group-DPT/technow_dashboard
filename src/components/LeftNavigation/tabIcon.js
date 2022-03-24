import React from 'react'
import { Button, Typography } from '@mui/material'

import styles from "./leftNavigation.style"

const TabIcon = ({
    currentTab,
    tabName,

    index,
    icon,
    onClick,
}) => {
    return (
        <Button
            sx={[styles.icBox, currentTab == index && styles.choosenIc]}
            onClick={onClick}
            color={"black"}
        >
            <img src={icon} style={styles.tabIc} />
            {/* <Typography>{tabName}</Typography> */}

        </Button>
    )
}

export default TabIcon