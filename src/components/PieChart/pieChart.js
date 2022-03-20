import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const CustomPieChart = ({ data, color, width, height, dataKey, outerRadius, innerRadius }) => {
    return (
        <PieChart
            width={width}
            height={height}
        >
            <Pie
                dataKey={dataKey}
                startAngle={112}
                endAngle={-360}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={outerRadius}
                innerRadius={innerRadius}
                animationDuration={1000}
            >
                <Cell fill={color} />
                <Cell fill='rgba(255, 0, 0, 0)' />
            </Pie>
        </PieChart>
    )
}

export default CustomPieChart