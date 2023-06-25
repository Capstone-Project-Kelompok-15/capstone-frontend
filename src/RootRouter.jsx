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
} from "./views"
import {
    RootLayout,
    ThreadLayout,
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
            <Route path="show/:id" element={<ShowThread />} />


            <Route path="thread" element={<ThreadLayout />}>
                <Route path="manage" element={<ManageThreadView />} />
            
            </Route>
        </Route>
    )
)

export default rootRouter
