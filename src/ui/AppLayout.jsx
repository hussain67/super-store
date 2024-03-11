import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function AppLayout() {
	return (
		<section>
			<Header />
			<Navbar />

			<div className="align-element mt-12">
				<Outlet />
			</div>
		</section>
	);
}

export default AppLayout;
