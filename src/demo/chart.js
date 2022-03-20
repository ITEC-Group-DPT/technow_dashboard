import React from 'react'
import BarChart from '../components/BarChart/barChart'
import LineChart from '../components/LineChart/lineChart'
import AreaChart from '../components/AreaChart/areaChart'
import PieChart from '../components/PieChart/pieChart'
import color from '..//constant/color'

const dataBarChart = [
    {
        month: 'Jan',
        orders: 55,
    },
    {
        month: 'Feb',
        orders: 42,
    },
    {
        month: 'Mar',
        orders: 78,
    },
    {
        month: 'Apr',
        orders: 58,
    },
    {
        month: 'May',
        orders: 96,
    },
];

const dataLineChart = [
    {
        month: 'Jan',
        income: 25,
    },
    {
        month: 'Feb',
        income: 28,
    },
    {
        month: 'Mar',
        income: 23,
    },
    {
        month: 'Apr',
        income: 37,
    },
    {
        month: 'May',
        income: 40,
    },
];

const dataAreaChart = [
    {
        month: 'Jan',
        users: 61,
    },
    {
        month: 'Feb',
        users: 54,
    },
    {
        month: 'Mar',
        users: 91,
    },
    {
        month: 'Apr',
        users: 145,
    },
    {
        month: 'May',
        users: 169,
    },
    {
        month: 'Jun',
        users: 244,
    },
];

const dataPieChart = [
    { percentage: 43 },
];

const chartDemo = () => {
    return (
        <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "60px 60px",
        }}>
            <div>
                <BarChart
                    data={dataBarChart}
                    xAxisName="month"
                    yAxisName="orders"
                    yAxisCount={6}
                    width={400}
                    height={300}
                    barSize={45}
                    barColor={color.orange}
                />

                <div style={{
                    marginTop: "70px",
                }}></div>

                <LineChart
                    data={dataLineChart}
                    xAxisName="month"
                    yAxisName="income"
                    yAxisCount={6}
                    width={400}
                    height={300}
                    lineColor={color.blue}
                />

                <div style={{
                    marginTop: "70px",
                }}></div>

                <AreaChart
                    data={dataAreaChart}
                    xAxisName="month"
                    yAxisName="users"
                    yAxisCount={6}
                    width={500}
                    height={400}
                    lineColor={color.green}
                    areaColor={color.lightGreen}
                />

                <PieChart
                    data={dataPieChart}
                    dataKey="percentage"

                    width={200}
                    height={200}

                    innerRadius={65}
                    left={80}
                    bottom={80}
                />
            </div>
        </div>
    )
}

export default chartDemo