import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-neutral text-neutral-content  ">
			<div className="align-element flex justify-center sm:justify-end gap-x-4 text-sm">
				<Link
					className="link link-hover"
					to="/login"
				>
					Sign in / Guest
				</Link>
				<Link
					className="link link-hover"
					to="/register"
				>
					Create an Account
				</Link>
			</div>
		</header>
	);
}

export default Header;
