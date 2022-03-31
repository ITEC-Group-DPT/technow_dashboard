import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import styles from './CardNameSeller.style'

const CardNameSeller = ({ rank, productImg = false, name, grow, growImg, growStatus = 'red', payment, isName = false }) => {
    let rankcolor = color["R" + rank]

    return (
        <Box sx={{
            px: 3, py: 1
        }}>
            <Box sx={{ ...styles.flex }}>
                {productImg == false ?
                    <Box sx={{
                        minWidth: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: rankcolor,
                    }}>
                        <p style={{ textAlign: 'center', color: color.white, fontWeight: "600" }}>{rank}</p>
                    </Box>
                    :
                    <Box sx={{
                        minWidth: 70,
                        height: 70,

                    }}>
                        <img style={{ height: "100%" }} src="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" alt="" />
                    </Box>}
                    
                <Box sx={{ ...styles.flex, flexWrap: "wrap", alignItems: 'center', justifyContent: 'space-between', flexGrow: 1, ml: 1 }}>

                    <Typography variant="p" component="div" sx={{ ...styles.pNameSlider, overflowWrap: 'anywhere', width: isName ? "100%" : "40%", textAlign: "start", fontWeight: "600" }}>
                        {name}
                    </Typography>

                    {isName
                        ? <></>
                        :
                        [productImg ==false && <Box sx={{ ...styles.flex, flexShrink: 1, }}>
                            <img src={growImg} alt="" />
                            {growStatus == "red" ?
                                <p style={{ color: color.red }}>{grow}</p>
                                :
                                <p style={{ color: color.green }}>{grow}</p>
                            }

                        </Box> ,
                        <Typography variant="p" component="div" sx={{ width:'fit-content' ,maxWidth: "45%", textAlign: "end", backgroundColor: color.lightBlue, borderRadius: 5, px: 1, color: color.blue }}>
                            {payment}
                        </Typography>
                        ]
                    }




                </Box>
            </Box>
        </Box>
    )
}
export default CardNameSeller;