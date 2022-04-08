import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import './lineChart.css'

const CustomLineChart = ({
    data,
    width,
    height,
    xAxisName,
    yAxisName,
    lineColor,
    yAxisCount }) => {

    const tickFormater = (number) => {
        if (number > 1000000) {
            return parseInt(number / 1000000)
        }
        else return number
    }

    const formatPrice = (value) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(value)
	}

    if(data.length == 0) return <></>

    return (
        <LineChart
            style={{ margin: 'auto', paddingRight: "20px" }}
            width={width}
            height={height}
            data={data}
        >

            <CartesianGrid vertical={false} />

            <XAxis
                dataKey={xAxisName}
                padding={{ left: 20, right: 20 }}
                axisLine={false}
                tickLine={false}
            />
            <YAxis
                padding={{ bottom: 15 }}
                tickMargin={20}
                tickCount={yAxisCount}
                axisLine={false}
                tickLine={false}
                tickFormatter={tickFormater}
                allowDecimals={false}
                interval={0}
            />

            <Tooltip formatter={value => formatPrice(value)} />

            <Line
                dataKey={yAxisName}
                stroke={lineColor}
                strokeWidth={2}
                dot={{ fill: lineColor, strokeWidth: 1, r: 3 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
            />

        </LineChart>
    )
}

export default CustomLineChart