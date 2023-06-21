import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BlockUserSlice } from "./BlockUser/BlockUserSlice";
import { MuteUserSlice } from "./MuteUser/MuteUserSlice";
import { SearchSlice } from "./Search/SearchSlice";
import { BlockModalSlice } from "./BlockModal/BlockModalSlice";
import { MuteModalSlice } from "./MuteModal/MuteModalSlice";
import { SidebarSlice } from "./Sidebar/SidebarSlice";
import { AdminLogin } from "./Login/AdminLogin";
import { SearchHistorySlice } from "./SearchHistory/SearchHistorySlice";
import { UsersSlice } from "./Users/UsersSlice";
import { DeleteModalSlice } from "./DeleteModal/DeleteModalSlice";
import { DeleteThreadSlice } from "./DeleteThread/DeleteThreadSlice";
import { ChartSlice } from "./Chart/ChartSlice";
import { KeluarModalSlice } from "./KeluarModal/KeluarModalSlice"


export const useStore = create(devtools((...a) => ({
	...BlockUserSlice(...a),
	...MuteUserSlice(...a),
	...SearchSlice(...a),
	...BlockModalSlice(...a),
	...MuteModalSlice(...a),
	...SidebarSlice(...a),
	...AdminLogin(...a),
	...SearchHistorySlice(...a),
	...UsersSlice(...a),
	...DeleteModalSlice(...a),
	...DeleteThreadSlice(...a),
	...ChartSlice(...a),
	...KeluarModalSlice(...a)
})));
