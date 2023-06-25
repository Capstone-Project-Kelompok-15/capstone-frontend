import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useEffect } from "react"
import { useStore } from "../../config/zustand/store"

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

    const {
        fetchChartThreads,
        chartThreads,
        setChartExpand,
        chartExpand,
        isExpand,
        getUsers,
        users,
        report,
        getReport,
    } = useStore((state) => state)

    useEffect(() => {
        fetchChartThreads()
        getReport()
    }, [])

    const filteredData = chartThreads.filter((item) =>
        item.createdAt.startsWith("2023")
    )
    const threadCountByMonth = Array(12).fill(0)
    filteredData.forEach((item) => {
        const month = new Date(item.createdAt).getMonth()
        threadCountByMonth[month]++
    })

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
    useEffect(() => {
        getUsers()
    }, [])
    const onlineUsers = users.filter(
        (user) => user.online_status && !user.block_status && user.mute_status
    ).length

    const totalUsers = users.filter((user) => !user.block_status).length
    const threadReport = report.filter((list) => list.accept_status === true)
    return {
        options,
        data,
        isExpand,
        chartExpand,
        setChartExpand,
        onlineUsers,
        totalUsers,
        report,
        threadReport,
    }
}
export default HomeViewModel
