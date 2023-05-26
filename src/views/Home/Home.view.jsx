import React, { useState } from "react";
import { Chart, Sidebar } from "../../components/organisms/";

function Home() {
	const [expand, setExpand] = useState(false);
	const handleExpand = () => {
		setExpand((prev) => !prev);
	};

	return (
		<div className="bg-[#F8F8F8] min-h-screen">
			<Sidebar expand={expand} handleExpand={handleExpand} />
			<div className="w-full ">
				<div className="container mx-auto px-20">
					<div className="grid grid-cols-12 gap-1 pt-[10px]">
						<div className="col-end-13 col-span-11">
							<div className="text-xl font-semibold pb-[33px]">Statistik 2023</div>
							<div className="bg-white rounded-2xl p-10 shadow-lg">
								<Chart />
							</div>
							<div className="text-2xl font-semibold py-[33px]">
								Hal Yang Perlu Di perhatikan
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
