import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import {
    HomeView,
    ManageThreadView,
    Login,
    LandingPageView,
    ShowThread,
    OnlineUserView,
    TotalUserView,
    MutedUserView,
    BlockedUserView,
} from "./views"
import {
    RootLayout,
    ThreadLayout,
    ProtectedRoute,
    ManageUserLayout,
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
            <Route path="show/:id" element={<ShowThread />} />

            <Route path="/manageUser" element={<ProtectedRoute>
                <ManageUserLayout />
            </ProtectedRoute>}>
                <Route path="online" element={<ProtectedRoute>
                    <OnlineUserView />
                </ProtectedRoute>} />
                <Route path="total" element={<ProtectedRoute>
                    <TotalUserView />
                </ProtectedRoute>} />
                <Route path="muted" element={<ProtectedRoute>
                    <MutedUserView />
                </ProtectedRoute>} />
                <Route path="blocked" element={<ProtectedRoute>
                    <BlockedUserView />
                </ProtectedRoute>} />
            </Route>


            <Route path="thread" element={<ThreadLayout />}>
                <Route path="manage" element={<ManageThreadView />} />

            </Route>
        </Route>
    )
)

export default rootRouter
