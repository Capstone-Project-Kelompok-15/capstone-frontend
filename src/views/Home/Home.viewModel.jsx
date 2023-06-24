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
import { useEffect } from "react"

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

    const { fetchChartThreads, chartThreads } = useStore((state) => state)
    useEffect(() => {
        fetchChartThreads()
    }, [])

    const filteredData = chartThreads.filter((item) =>
        item.createdAt.startsWith("2023")
    )
    const threadCountByMonth = Array(12).fill(0)
    filteredData.forEach((item) => {
        const month = new Date(item.createdAt).getMonth()
        threadCountByMonth[month]++
    })
    console.log(threadCountByMonth)

    const data = {
        labels,
        datasets: [
            {
                label: "Thread",
                data: threadCountByMonth,
                backgroundColor: "#5584D2",
            },
        ],
    }

    const isExpand = useStore((state) => state.isExpand)
    const chartExpand = useStore((state) => state.chartExpand)
    const toggleChart = useStore((state) => state.setChartExpand)

    return {
        options,
        data,
        isExpand,
        chartExpand,
        toggleChart,
    }
}
export default HomeViewModel
