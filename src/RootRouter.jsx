import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import {
	BlockedUserView,
	MutedUserView,
	OnlineUserView,
	TotalUserView,
	HomeView,
	ManageThreadView,
	Login,
	LandingPageView,
} from "./views";
import { RootLayout, ThreadLayout, ManageUserLayout } from "./layout";

const rootRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomeView />} />

			{/* <Route index element={<LandingPageView />} /> */}
			<Route path="/login" element={<Login />} />

			<Route path="/manageUser" element={<ManageUserLayout />}>
				<Route path="online" element={<OnlineUserView />} />
				<Route path="total" element={<TotalUserView />} />
				<Route path="muted" element={<MutedUserView />} />
				<Route path="blocked" element={<BlockedUserView />} />
			</Route>

			<Route path="thread" element={<ThreadLayout />}>
				<Route path="manage" element={<ManageThreadView />} />
			</Route>
		</Route>
	)
);

export default rootRouter;