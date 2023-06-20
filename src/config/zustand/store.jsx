import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BlockUserSlice } from "./BlockUser/BlockUserSlice";
import { MuteUserSlice } from "./MuteUser/MuteUserSlice";
import { SearchSlice } from "./Search/SearchSlice";
import { BlockModalSlice } from "./BlockModal/BlockModalSlice";
import { MuteModalSlice } from "./MuteModal/MuteModalSlice";
import { SidebarSlice } from "./Sidebar/SidebarSlice";
import { AdminLogin } from "./Login/AdminLogin";
import { UsersSlice } from "./Users/UsersSlice";

export const useStore = create(devtools((...a) => ({
	...BlockUserSlice(...a),
	...MuteUserSlice(...a),
	...SearchSlice(...a),
	...BlockModalSlice(...a),
	...MuteModalSlice(...a),
	...SidebarSlice(...a),
	...AdminLogin(...a),
	...UsersSlice(...a)
})));
