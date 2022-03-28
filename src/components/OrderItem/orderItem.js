import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import styles from './orderItem.style'

const OrderItem = ({ order }) => {
    return (
        <Grid container sx={styles.container}>
            <Grid item xs={2}>
                <Typography sx={styles.id}>{order.id}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{order.cusName}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography sx={{...styles.date, ...styles.textCenter}}>{order.date}</Typography>
            </Grid>
            <Grid item xs={2.5} sx={styles.priceItem}>
                <Box sx={styles.priceWrapper}>
                    <Typography sx={styles.price}>{order.price}</Typography>
                </Box>
            </Grid>
            <Grid item xs={2.5}>
                <Typography sx={styles.textCenter}>{order.status}</Typography>
            </Grid>
        </Grid>
    )
}

export default OrderItem