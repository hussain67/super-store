import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Loading from "./Loading";

function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<section>
			<Header />
			<Navbar />
			{isLoading ? (
				<Loading />
			) : (
				<div className="align-element mt-12">
					<Outlet />
				</div>
			)}
		</section>
	);
}

export default AppLayout;
