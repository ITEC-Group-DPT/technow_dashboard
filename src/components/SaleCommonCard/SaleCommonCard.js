import React from 'react'
import color from '../../constant/color'
import { useNavigate } from 'react-router-dom'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import styles from './SaleCommonCard.style'

const SaleCommonCard = ({ title = '', children, footer = false, sx }) => {
    const navigate = useNavigate()

    return (
        <Card sx={{
            ...styles.card, boxShadow: '0px 1px #d5d6d8', pt: '16px', pb: '28px',
            ...sx,
        }}>
            <CardContent sx={{ px: 4, pt: 1, py: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: "700", fontSize: "22px", color: "#575757", py: 0, mb: 1 }}>
                    {title}
                </Typography>
            </CardContent>
            {children}
            {footer &&
                <CardActions sx={{
                    mt: 0.5,
                    width: "100%",
                    p: 0,
                }}>
                    <Button
                        sx={{
                            color: color.grayText,
                            px: 0,
                            pb: 1,
                            fontSize: '14px',
                            textAlign: "center",
                            textTransform: 'unset',
                            width: "100%"
                        }}
                        onClick={() => navigate("/customers")}
                    >
                        See all
                    </Button>
                </CardActions>
            }
        </Card>
    )
}
export default SaleCommonCard;