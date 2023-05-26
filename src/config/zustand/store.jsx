import { create } from 'zustand'
import { BlockUserSlice } from './BlockUser/BlockUserSlice'
import { MuteUserSlice } from './MuteUser/MuteUserSlice'
import { SearchSlice } from './Search/SearchSlice'
import { BlockModalSlice } from './BlockModal/BlockModalSlice'

export const useStore = create((...a) => ({
    ...BlockUserSlice(...a),
    ...MuteUserSlice(...a),
    ...SearchSlice(...a),
    ...BlockModalSlice(...a)
}))