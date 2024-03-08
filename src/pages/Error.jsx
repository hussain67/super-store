import { Link, useRouteError } from "react-router-dom";

function Error() {
	const error = useRouteError();
	console.log(error.status);
	if (error.status === 404) {
		return (
			<main className="grid place-items-center min-h-[100vh]">
				<h2>Page not found</h2>
				<p className="text-4xl text-blue-500">404</p>
				<Link to="/">Back to home page</Link>
			</main>
		);
	}
	return (
		<main className="grid place-items-center min-h-[100vh]">
			<h4 className="text-center font-bold text-4xl"> There was an error</h4>
		</main>
	);
}

export default Error;
