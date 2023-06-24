import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SearchSlice } from './Search/SearchSlice'
import { SidebarSlice } from './Sidebar/SidebarSlice'
import { UsersSlice } from './Users/UsersSlice'

export const useStore = create(devtools((...a) => ({
    ...SearchSlice(...a),
    ...SidebarSlice(...a),
    ...UsersSlice(...a)
})))