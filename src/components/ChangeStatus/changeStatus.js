import React, { useState, useEffect } from 'react'
import {
    Select,
    FormControl,
    MenuItem,
    InputBase,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    styled,
} from '@mui/material'
import './changeStatus.css'
import { updateStatus } from '../../api/orderReportAPI'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}))

const statusList = [
    {
        id: 0,
        value: "Cancelled",
        color: '#DB3838',
        bgColor: '#FFE3E3',
    },
    {
        id: 1,
        value: "Received",
        color: '#6D6D6D',
        bgColor: '#E7E7E7',
    },
    {
        id: 2,
        value: "Processing",
        color: '#386FDB',
        bgColor: '#E3EEFF',
    },
    {
        id: 3,
        value: "Shipping",
        color: '#DABB1C',
        bgColor: '#FFFDD3',
    },
    {
        id: 4,
        value: "Completed",
        color: '#31A32F',
        bgColor: '#E1FFE4',
    },
]

const ChangeStatus = ({ defaultValue = 0, orderID = 0 }) => {
    const [status, setStatus] = useState(statusList[defaultValue])
    const [selectedID, setSelectedID] = useState(null)
    const [openDialog, setOpenDialog] = useState(false)
    const [activeList, setActiveList] = useState(statusList)

    useEffect(() => {
        const index = statusList.findIndex(item => item.id == status.id)
        if (index == -1) return

        if (index == 0 || index == 4) {
            setActiveList([statusList[index]])
            return
        }

        const sliceData = statusList.slice(index)
        sliceData.push(statusList[0])
        setActiveList(sliceData)

    }, [status])


    const handleOpen = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
        setSelectedID(null)
    }

    const handleChange = (event) => {
        handleOpen()
        setSelectedID(event.target.value)
    }

    const handleConfirm = () => {
        updateStatus(orderID, selectedID).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                console.log(data)

                setStatus(statusList[selectedID])
                handleClose()
            }
        })
    }

    return (
        <Box sx={styles.container}>
            <Box>
                <FormControl
                    sx={[styles.formControl, {
                        backgroundColor: status.bgColor
                    }]}
                >
                    <Select
                        sx={[styles.select, {
                            color: status.color,
                            '& svg': {
                                fill: status.color,
                            }
                        }]}
                        value={status.id}
                        onChange={handleChange}
                        input={<MyInput />}
                        className="STATUS-WRAPPER"
                        MenuProps={{ disableScrollLock: true }}
                    >
                        {activeList.map((status) => (
                            <MenuItem
                                value={status.id}
                                key={status.id}
                            >
                                {status.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableScrollLock
            >
                <DialogTitle id="alert-dialog-title">
                    Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to update this order status?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

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