import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardNameSeller.style'
let flexpercentage = [1, 4, 1, 4]
const CardNameSeller = ({ rank, name, grow, growImg, growStatus = 'red', payment, isName = false }) => {
    let rankcolor = color["R" + rank]

    return (
        <Box sx={{
            px: 3, py: 1
        }}>
            <Box sx={{ ...styles.flex }}>

                <Box sx={{
                    minWidth: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: rankcolor,
                    flex: flexpercentage[0]
                }}>
                    <p style={{ textAlign: 'center', color: color.white, fontWeight: "600" }}>{rank}</p>
                </Box>



                <Typography variant="p" component="div" sx={{ ...styles.pNameSlider, flex: flexpercentage[1], overflowWrap: 'anywhere', textAlign: "start", fontWeight: "600" }}>
                    {name}
                </Typography>

                {isName
                    ? <></>
                    :
                    [<Box sx={{ ...styles.flex, flex: flexpercentage[2] }}>
                        <img src={growImg} alt="" />
                        {growStatus == "red" ?
                            <p style={{ color: color.red }}>{grow}</p>
                            :
                            <p style={{ color: color.green }}>{grow}</p>
                        }

                    </Box>,
                    <Box sx={{ flex: flexpercentage[3], textAlign: 'end' }}>
                        <Typography variant="p" sx={{ width: 'fit-content', maxWidth: "45%", backgroundColor: color.lightBlue, borderRadius: 5, px: 1, color: color.blue }}>
                            {payment}
                        </Typography>
                    </Box>


                    ]
                }
            </Box>
        </Box>
    )
}
export default CardNameSeller;