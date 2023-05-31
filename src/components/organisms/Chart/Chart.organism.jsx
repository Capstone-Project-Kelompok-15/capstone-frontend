import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
			labels: {
				useBorderRadius: true,
				borderRadius: 5,
				boxWidth: 10,
				boxHeight: 10,
			},
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			grid: {
				display: false,
			},
			ticks: {
				stepSize: 100,
			},
		},
	},
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export const data = {
	labels,
	datasets: [
		{
			label: "Thread",
			data: [100, 200, 122, 12, 23, 345, 45, 234, 43, 54, 344, 333],
			backgroundColor: "#5584D2",
		},
	],
};

function Chart() {
	return (
		<div>
			<Bar options={options} data={data} height="80px" />
		</div>
	);
}

export default Chart;
