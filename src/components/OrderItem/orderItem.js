import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import ChangeStatus from '../../components/ChangeStatus/changeStatus'
import styles from './orderItem.style'

const OrderItem = ({ order }) => {

    const formatPrice = (value) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(value)
	}

    return (
        <Grid container sx={styles.container}>
            <Grid item xs={2} sx={styles.alignCenter}>
                <Typography sx={styles.id}>{order.id}</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.alignCenter}>
                <Typography>{order.cusName}</Typography>
            </Grid>
            <Grid item xs={2} sx={styles.alignCenter}>
                <Typography
                    sx={{ ...styles.date, ...styles.textCenter }}
                >
                    {order.date}
                </Typography>
            </Grid>
            <Grid item xs={2.5} sx={styles.priceItem}>
                <Box sx={styles.priceWrapper}>
                    <Typography sx={styles.price}>{formatPrice(order.price)}</Typography>
                </Box>
            </Grid>

            <Grid item xs={2.5} sx={styles.changeStatusWrapper}>
                <ChangeStatus
                    defaultValue={order.status}
                    orderID={order.id}
                />
            </Grid>
        </Grid>
    )
}

export default OrderItem