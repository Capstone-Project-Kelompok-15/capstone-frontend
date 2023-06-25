import React from "react"
import { Chart, HomeStats } from "../../components/organisms"
import { TooltipButton } from "../../components/atoms"
import HomeViewModel from "./Home.viewModel"

function Home() {
    const viewModel = HomeViewModel()

    return (
        <div className="bg-[#F8F8F8] min-h-screen pb-10">
            <div className="w-full">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div
                            className={`col-end-13 col-span-11 transition-all duration-200 ease-out  ${
                                viewModel.isExpand ? "ml-24" : "-ml-10"
                            }`}>
                            <div className="flex gap-2 items-center mb-[30px]">
                                <div className="text-xl font-semibold" id="homepage">
                                    Statistik 2023
                                </div>
                                <TooltipButton />
                            </div>
                            <div className="bg-white rounded-2xl p-10 shadow-lg">
                                <Chart
                                    options={viewModel.options}
                                    data={viewModel.data}
                                    chartExpand={viewModel.chartExpand}
                                    toggleChart={viewModel.setChartExpand}
                                />
                            </div>
                            <div className="text-2xl font-semibold py-[33px]">
                                Hal Yang Perlu Di perhatikan
                            </div>
                            <div>
                                <HomeStats
                                    onlineUsers={viewModel.onlineUsers}
                                    totalUsers={viewModel.totalUsers}
                                    totalThread={viewModel.report.length}
                                    totalThreadReport={
                                        viewModel.threadReport.length
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
