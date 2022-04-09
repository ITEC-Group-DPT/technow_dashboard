import React from 'react'

import { Box } from '@mui/system';
import { PieChart, Pie, Cell } from 'recharts';
import { Typography } from '@mui/material';
import color from '../../constant/color';

const CustomPieChart = ({
    percent, width, height,
    innerRadius, bottom, left,
    fontSize = 26,
}) => {

    const pieData = [
        { percentage: percent },
        { percentage: 100 - percent },
    ];

    return (
        <Box sx={{ position: "relative" }}>
            <PieChart
                width={width}
                height={height}
            >
                <Pie
                    dataKey={"percentage"}
                    startAngle={112}
                    endAngle={-360}
                    data={pieData}
                    cornerRadius={16}
                    cx="50%"
                    cy="50%"
                    innerRadius={innerRadius}
                    animationDuration={1200}
                >
                    <Cell strokeOpacity={"0"} fill={color.lightBlack} />
                    <Cell strokeOpacity={"0"} fill='rgba(255, 0, 0, 0)' />
                </Pie>
            </PieChart>

            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: fontSize,
                    position: "absolute",
                    bottom: bottom,
                    left: left,
                    color: color.lightBlack,
                    textAlign:"center",
                }}
            >
                {percent}%
            </Typography>
        </Box>
    )
}


export default CustomPieChart