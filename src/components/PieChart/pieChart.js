import React from 'react'

import { Box } from '@mui/system';
import { PieChart, Pie, Cell } from 'recharts';
import { Typography } from '@mui/material';
import color from '../../constant/color';

const CustomPieChart = ({
    data, width, height, dataKey,
    innerRadius, bottom, left,
}) => {

    const pieData = [
        data[0],
        {[dataKey]: 100 - data[0][dataKey]}
    ];
    return (
        <Box sx={{ position: "relative" }}>
            <PieChart
                width={width}
                height={height}
            >
                <Pie
                    dataKey={dataKey}
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
                {data[0][dataKey]}%
            </Typography>
        </Box>
    )
}


export default CustomPieChart