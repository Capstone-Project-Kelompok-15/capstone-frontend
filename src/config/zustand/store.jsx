import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { SearchSlice } from "./Search/SearchSlice";
import { SidebarSlice } from "./Sidebar/SidebarSlice";
import { AdminLogin } from "./Login/AdminLogin";
import { UsersSlice } from "./Users/UsersSlice";
import { ReportThreadsSlice } from "./ReportThreads/ReportThreadsSlice"


export const useStore = create(devtools((...a) => ({
	...ChartSlice(...a),
    ...SearchSlice(...a),
	...SidebarSlice(...a),
	...AdminLogin(...a),
	...UsersSlice(...a),
    ...ReportThreadsSlice(...a),
})));
