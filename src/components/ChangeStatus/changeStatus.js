import React, { useState } from 'react'
import { Select, FormControl, MenuItem, styled, InputBase, Box } from '@mui/material'
import './changeStatus.css'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}))

const statusList = {
    Cancelled: {
        value: "Cancelled",
        color: '#DB3838',
        bgColor: '#FFE3E3',
    },

    Received: {
        value: "Received",
        color: '#6D6D6D',
        bgColor: '#E7E7E7',
    },

    Processing: {
        value: "Processing",
        color: '#386FDB',
        bgColor: '#E3EEFF',
    },

    Shipping: {
        value: "Shipping",
        color: '#DABB1C',
        bgColor: '#FFFDD3',
    },

    Completed: {
        value: "Completed",
        color: '#31A32F',
        bgColor: '#E1FFE4',
    },
}

const ChangeStatus = ({ defaultValue = 0, onChangeValue }) => {
    const [status, setStatus] = useState(statusList[defaultValue])

    const handleChange = (event) => {
        const value = event.target.value
        onChangeValue && onChangeValue(value)
        setStatus(statusList[value])
    }

    return (
        <Box sx={styles.container}>
            <Box>
                <FormControl
                    sx={[styles.formControl, {
                        backgroundColor: status.bgColor
                    }]}>
                    <Select
                        sx={[styles.select, {
                            color: status.color,
                            '& svg': {
                                fill: status.color,
                            }
                        }]}
                        value={status.value}
                        onChange={handleChange}
                        input={<MyInput />}
                        className="STATUS-WRAPPER"
                    >
                        {Object.keys(statusList).map((key) => (
                            <MenuItem
                                value={statusList[key].value}
                                key={statusList[key].value}
                            >
                                {statusList[key].value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
    },
    formControl: {
        borderRadius: "5px",
        height: "100%",
        width: "120px",
    },
    select: {
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 500,
    },
}

export default ChangeStatus