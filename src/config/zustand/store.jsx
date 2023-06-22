import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SearchSlice } from './Search/SearchSlice'
import { SidebarSlice } from './Sidebar/SidebarSlice'
import { SearchHistorySlice } from './SearchHistory/SearchHistorySlice'
import { UsersSlice } from './Users/UsersSlice'

export const useStore = create(devtools((...a) => ({
    ...SearchSlice(...a),
    ...SidebarSlice(...a),
    ...SearchHistorySlice(...a),
    ...UsersSlice(...a)
})))