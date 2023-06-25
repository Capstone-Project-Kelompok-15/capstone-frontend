import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { ChartSlice } from "./Chart/ChartSlice"
import { KeluarModalSlice } from "./KeluarModal/KeluarModalSlice"
import { AdminLogin } from "./Login/AdminLogin"
import { SearchSlice } from "./Search/SearchSlice"
import { SearchHistorySlice } from "./SearchHistory/SearchHistorySlice"
import { SidebarSlice } from "./Sidebar/SidebarSlice"
import { ReportThreadsSlice } from "./ReportThreads/ReportThreadsSlice"

export const useStore = create(
    devtools((...a) => ({
        ...ChartSlice(...a),
        ...KeluarModalSlice(...a),
        ...AdminLogin(...a),
        ...SearchSlice(...a),
        ...SearchHistorySlice(...a),
        ...SidebarSlice(...a),
        ...ReportThreadsSlice(...a),
    }))
)
