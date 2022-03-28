import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import styles from './CardNameSeller.style'

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
                }}>
                    <p style={{ textAlign: 'center', color: color.white, fontWeight: "600" }}>{rank}</p>
                </Box>

                <Box sx={{ ...styles.flex, flexWrap: "wrap", alignItems: 'center', justifyContent: 'space-between', flexGrow: 1, ml: 1 }}>
                   
                    <Typography variant="p" component="div" sx={{ width: isName ? "100%" : "40%", textAlign: "start", fontWeight: "600" }}>
                        {name}
                    </Typography>
                    {isName
                        ? <></>
                        :
                        [<Box sx={{ ...styles.flex, flexShrink: 1, }}>
                            <img src={growImg} alt="" />
                            {growStatus == "red" ?
                                <p style={{ color: color.red }}>{grow}</p>
                                :
                                <p style={{ color: color.green }}>{grow}</p>
                            }

                        </Box>,
                        <Typography variant="p" component="div" sx={{ width: "45%", textAlign: "end", backgroundColor: color.lightBlue, borderRadius: 5, px: 1, color: color.blue }}>
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