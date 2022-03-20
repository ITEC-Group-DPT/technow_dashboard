import React from 'react'

import { Box } from '@mui/system';
import { PieChart, Pie, Cell } from 'recharts';
import { Typography } from '@mui/material';
import color from '../../constant/color';

const CustomPieChart = ({
    percent, width, height,
    innerRadius, bottom, left,
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
                    animationDuration={1000}
                >
                    <Cell fill={color.lightBlack} />
                    <Cell fill='rgba(255, 0, 0, 0)' />
                </Pie>
            </PieChart>

            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: 26,
                    position: "absolute",
                    bottom: bottom,
                    left: left,
                    color: color.lightBlack,
                }}
            >
                {percent}%
            </Typography>
        </Box>
    )
}


export default CustomPieChart