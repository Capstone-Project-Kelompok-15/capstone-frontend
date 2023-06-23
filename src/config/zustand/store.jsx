import { create } from "zustand"
import { BlockUserSlice } from "./BlockUser/BlockUserSlice"
import { MuteUserSlice } from "./MuteUser/MuteUserSlice"
import { SearchSlice } from "./Search/SearchSlice"
import { BlockModalSlice } from "./BlockModal/BlockModalSlice"
import { MuteModalSlice } from "./MuteModal/MuteModalSlice"
import { SidebarSlice } from "./Sidebar/SidebarSlice"
import { AdminLogin } from "./Login/AdminLogin"
import { CardStatsSlice } from "./CardStats/CardStatsSlice"
import { KeluarModalSlice } from "./KeluarModal/KeluarModalSlice"
import { UbahProfile } from "./UbahProfile/UbahProfile"
import { SimpanModalSlice } from "./SimpanModal/SimpanModalSlice"
import { devtools } from "zustand/middleware"

export const useStore = create(
    devtools((...a) => ({
        ...BlockUserSlice(...a),
        ...MuteUserSlice(...a),
        ...SearchSlice(...a),
        ...BlockModalSlice(...a),
        ...MuteModalSlice(...a),
        ...SidebarSlice(...a),
        ...AdminLogin(...a),
        ...CardStatsSlice(...a),
        ...KeluarModalSlice(...a),
        ...UbahProfile(...a),
        ...SimpanModalSlice(...a),
    }))
)
