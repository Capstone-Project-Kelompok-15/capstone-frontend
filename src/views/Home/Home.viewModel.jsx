import React from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useStore } from "../../config/zustand/store"
import threads from "../../dummyData/ThreadList"

const HomeViewModel = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    )

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
    }

    const labels = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ]
    const Months = []
    threads.forEach((thread) => {
        const [month, _, year] = thread.date.split("/")
        if (Number(year) === 2023) {
            Months[Number(month)] = (Months[Number(month)] || 0) + 1
        }
    })
    Months.shift()

    const data = {
        labels,
        datasets: [
            {
                label: "Thread",
                data: Months,
                backgroundColor: "#5584D2",
            },
        ],
    }

    const isExpand = useStore((state) => state.isExpand)
    const chartExpand = useStore((state) => state.chartExpand)
    const toggleChart = useStore((state) => state.setChartExpand)

    console.log(Months)
    return {
        options,
        data,
        isExpand,
        chartExpand,
        toggleChart,
    }
}
export default HomeViewModel
