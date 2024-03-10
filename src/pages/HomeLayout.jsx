import { Outlet } from "react-router-dom";

function HomeLayout() {
	return (
		<div>
			<h1>Home Layout</h1>
			<section className="align-element">
				<Outlet />
			</section>
		</div>
	);
}

export default HomeLayout;
