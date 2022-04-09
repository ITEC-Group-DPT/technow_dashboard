import React from 'react'

import { Box } from '@mui/system';
import Button from '@mui/base/ButtonUnstyled';


import { LeftArrowIc, RightArrowIc } from "../../constant/icon";
import { Typography } from '@mui/material';
import color from '../../constant/color';

const Pagination = ({
    page,
    maxPages,

    onBack,
    onForward,
}) => {
    return (

        <Box sx={styles.container}>

            {/* back arrow */}
            <Button
                onClick={onBack}
                style={styles.arrowBox}
            >
                <img src={LeftArrowIc} width={14} height={14} />
            </Button>

            {/* forward arrow */}
            <Button
                onClick={onForward}
                style={styles.arrowBox}
            >
                <img src={RightArrowIc} width={14} height={14} />
            </Button>

            {/* pages box */}
            <Box sx={styles.pageBox}>
                <Typography
                    sx={styles.pageText}
                >
                    Page {page}/{maxPages}
                </Typography>
            </Box>


        </Box>
    )
}

const styles = {
    container: {
        display: "flex",
        height: "100%",
    },
    arrowBox: {
        cursor: "pointer",
        border: "1px solid #D0D0D0",
        background: "white",

        borderRadius: "5px",
        display: "flex",
        alignItems: "center",

        marginRight: "6px",
        py: "10px",
        px: "9px",
    },
    pageBox: {
        border: "1px solid #D0D0D0",
        background: "white",

        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        py: "10px",
        px: "16px",
    },
    pageText: {
        fontSize: 14,
        color: color.lightGrayText,
        whiteSpace: 'nowrap',
        textAlign: "center",
        minWidth: '70px',
    },
}

export default Pagination;