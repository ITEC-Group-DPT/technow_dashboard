import React from 'react'
import { Box } from '@mui/system';
import { InputBase } from '@mui/material';

import { SearchIc } from "../../constant/icon";
import color from '../../constant/color';

const SearchBar = ({
    // width = "",
    text = "",
    setText,
    placeholder,
}) => {

    return (
        <Box
            sx={styles.searchBox}
        >
            <img
                style={{ userSelect: 'none' }}
                src={SearchIc} width={14} height={14} />

            <InputBase
                sx={styles.searchInput}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={placeholder}
            />
        </Box>
    )
}

const styles = {
    searchBox: {
        background: "white",
        display: "flex",
        alignItems: "center",
        height: "100%",

        border: "1px solid #D0D0D0",
        borderRadius: "5px",
        boxSizing: 'border-box',
        
        px: "12px",

    },
    searchInput: {
        width: "100%",
        fontSize: 15,
        color: color.lightGrayText,
        marginLeft: 1,
    },
}

export default SearchBar;