import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import {
    BlockedUserView,
    MutedUserView,
    OnlineUserView,
    TotalUserView,
    HomeView,
    ManageThreadView,
    Login,
    LandingPageView,
    ThreadReport,
    UbahProfile,
    ShowThread,
} from "./views"
import {
    RootLayout,
    ThreadLayout,
    ManageUserLayout,
    ProtectedRoute,
} from "./layout"

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route
                index
                element={
                    <ProtectedRoute>
                        <HomeView />
                    </ProtectedRoute>
                }
            />
            <Route path="login" element={<Login />} />
            <Route path="landing" element={<LandingPageView />} />
            <Route
                path="ubahprofil"
                element={
                    <ProtectedRoute>
                        <UbahProfile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="show/:id"
                element={
                    <ProtectedRoute>
                        <ShowThread />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/manage-user"
                element={
                    <ProtectedRoute>
                        <ManageUserLayout />
                    </ProtectedRoute>
                }>
                <Route path="online" element={<OnlineUserView />} />
                <Route path="total" element={<TotalUserView />} />
                <Route path="muted" element={<MutedUserView />} />
                <Route path="blocked" element={<BlockedUserView />} />
            </Route>

            <Route
                path="thread"
                element={
                    <ProtectedRoute>
                        <ThreadLayout />
                    </ProtectedRoute>
                }>
                <Route path="manage" element={<ManageThreadView />} />
                <Route path="report" element={<ThreadReport />} />
            </Route>
        </Route>
    )
)
export default rootRouter
