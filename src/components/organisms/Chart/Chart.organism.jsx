import React from "react"
import { Bar } from "react-chartjs-2"

function Chart({ data, options, chartExpand, toggleChart }) {
    return (
        <div
            className={`${
                chartExpand ? "h-[440px]" : "h-[340px]"
            } cursor-pointer transition-all`}
            onClick={toggleChart}
            id="chart">
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart
