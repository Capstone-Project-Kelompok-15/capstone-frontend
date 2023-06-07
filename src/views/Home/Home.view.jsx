import React from "react";
import { Chart, HomeStats } from "../../components/organisms";
import { TooltipButton } from "../../components/atoms";

function Home() {
	return (
		<div className="bg-[#F8F8F8] min-h-screen">
			<div className="w-full ">
				<div className="container mx-auto px-20">
					<div className="grid grid-cols-12 gap-1 pt-[10px]">
						<div className="col-end-13 col-span-11">
							<div className="flex gap-2 items-center mb-[33px]">
								<div className="text-xl font-semibold">Statistik 2023</div>
								<TooltipButton />
							</div>
							<div className="bg-white rounded-2xl p-10 shadow-lg">
								<Chart />
							</div>
							<div className="text-2xl font-semibold py-[33px]">
								Hal Yang Perlu Di perhatikan
							</div>
							<div>
								<HomeStats />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
