import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import { ManageUserLayout } from './layout'
import {
    BlockedUserView,
    MutedUserView,
    OnlineUserView,
    TotalUserView
} from './views'

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/manageUser' element={<ManageUserLayout />}>
            <Route path='online' element={<OnlineUserView />} />
            <Route path='total' element={<TotalUserView />} />
            <Route path='muted' element={<MutedUserView />} />
            <Route path='blocked' element={<BlockedUserView />} />
        </Route>

    )
)

export default rootRouter