import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";

function HomeLayout() {
	return (
		<section>
			<Header />
			<Navbar />
			<div className="align-element">
				<Outlet />
			</div>
		</section>
	);
}

export default HomeLayout;
