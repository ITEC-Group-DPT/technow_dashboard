import React, { useState } from 'react'
import { Select, FormControl, MenuItem, styled, InputBase, Box } from '@mui/material'
import './changeStatus.css'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}))

const statusList = [
    {
        value: "Cancelled",
        color: '#DB3838',
        bgColor: '#FFE3E3',
    },
    {
        value: "Received",
        color: '#6D6D6D',
        bgColor: '#E7E7E7',
    },
    {
        value: "Processing",
        color: '#386FDB',
        bgColor: '#E3EEFF',
    },
    {
        value: "Shipping",
        color: '#DABB1C',
        bgColor: '#FFFDD3',
    },
    {
        value: "Completed",
        color: '#31A32F',
        bgColor: '#E1FFE4',
    },
]

const ChangeStatus = ({ defaultValue = 0, onChangeValue }) => {
    const [status, setStatus] = useState(statusList[defaultValue])

    const handleChange = (event) => {
        const updatedStatus = event.target.value
        
        statusList.forEach((status, index) => {
            if (status.value == updatedStatus) {
                onChangeValue && onChangeValue(updatedStatus)
                setStatus(statusList[index])
                return;
            }
        })
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
                        {statusList.map((status) => (
                            <MenuItem
                                value={status.value}
                                key={status.value}
                            >
                                {status.value}
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