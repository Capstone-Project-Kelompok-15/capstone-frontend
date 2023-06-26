import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { SidebarSlice } from "./Sidebar/SidebarSlice"
import { UsersSlice } from "./Users/UsersSlice"
import { ReportThreadsSlice } from "./ReportThreads/ReportThreadsSlice"
import { ChartSlice } from "./Chart/ChartSlice"
import { KeluarModalSlice } from "./KeluarModal/KeluarModalSlice"
import { UbahProfile } from "./UbahProfile/UbahProfile"
import { SimpanModalSlice } from "./SimpanModal/SimpanModalSlice"
import { AdminLogin } from "./Login/AdminLogin"
import { SearchSlice } from "./Search/SearchSlice"

export const useStore = create(
    devtools((...a) => ({
        ...AdminLogin(...a),
        ...SearchSlice(...a),
        ...ChartSlice(...a),
        ...SidebarSlice(...a),
        ...UsersSlice(...a),
        ...ReportThreadsSlice(...a),
        ...KeluarModalSlice(...a),
        ...UbahProfile(...a),
        ...SimpanModalSlice(...a),
    }))
)
