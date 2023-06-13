import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import {
    BlockedUserView,
    MutedUserView,
    OnlineUserView,
    TotalUserView,
    HomeView,
} from './views'
import {
    RootLayout,
    ManageUserLayout
} from './layout'

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<HomeView />} />

            <Route path='/manageUser' element={<ManageUserLayout />}>
                <Route path='online' element={<OnlineUserView />} />
                <Route path='total' element={<TotalUserView />} />
                <Route path='muted' element={<MutedUserView />} />
                <Route path='blocked' element={<BlockedUserView />} />
            </Route>

        </Route>

    )
)

export default rootRouter