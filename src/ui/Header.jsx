import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(state => state.userState.user);
	const queryClient = useQueryClient();

	const handleLogout = () => {
		navigate("/");
		dispatch(clearCart());
		dispatch(logoutUser());
		queryClient.removeQueries();
	};
	return (
		<header className="bg-neutral text-neutral-content py-2 ">
			<div className="align-element flex justify-center sm:justify-end gap-x-4 text-sm">
				{user ? (
					<div className="flex gap-x-2 sm:gap-x-8 items-center">
						<p className="text-xs capitalize sm:text-sm">Hello, {user?.username}</p>
						<button
							className="btn btn-xs btn-outline btn-primary"
							onClick={handleLogout}
						>
							logout
						</button>
					</div>
				) : (
					<div className="flex gap-x-6 justify-center items-center">
						<Link
							className="link link-hover"
							to="/login"
						>
							Sign in
						</Link>
						<Link
							className="link link-hover"
							to="/register"
						>
							Create an Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
