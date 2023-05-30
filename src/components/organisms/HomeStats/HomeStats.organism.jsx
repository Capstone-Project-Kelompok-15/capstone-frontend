import React from "react";
import { CardStats } from "../../molecules";

function HomeStats() {
	return (
		<div>
			<div className="w-full flex justify-between items-center">
				<CardStats
					statsNumber={99999}
					statsTitle="Jumlah Pengguna"
					Link="/manageUser/total"
					hover
				/>
				<CardStats
					statsNumber={99999}
					statsTitle="Pengguna Online"
					Link="/manageUser/online"
					hover
				/>
				<CardStats
					statsNumber={99999}
					statsTitle="Jumlah Thread"
					Link="/asd"
					hover
				/>
				<CardStats
					statsNumber={99999}
					statsTitle="Thread Yang Dilaporkan"
					Link="/asd"
					hover
				/>
			</div>
		</div>
	);
}

export default HomeStats;
