import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

// Navbar component
function Navbar() {
	const dispatch = useDispatch();
	const totalItems = useSelector(state => state.cartState.numItemsInCart);
	const handleTheme = () => {
		dispatch(toggleTheme());
	};
	// useEffect(() => {}, [theme]);
	return (
		<nav className="bg-base-200">
			<section className="navbar">
				<div className="navbar-start">
					{/* Title */}
					<NavLink className="btn btn-ghost bg-primary items-center text-3xl text-white hidden lg:flex">S</NavLink>
					{/* Dropdown */}
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-200"
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal">
						<NavLinks />
					</ul>
				</div>
				<div className="navbar-end">
					{/* THEME SETUP */}
					<label className="swap swap-rotate">
						<input
							type="checkbox"
							onChange={handleTheme}
						/>
						{/* sun icon*/}
						<BsSunFill className="swap-on h-4 w-4" />
						{/* moon icon*/}
						<BsMoonFill className="swap-off h-4 w-4" />
					</label>
					{/* Theme setup */}
					{/* <div
						onClick={handleTheme}
						className="cursor-pointer"
					>
						{theme === "winter" ? <BsMoonFill /> : <BsSunFill />}
					</div> */}
					{/* Cart Link */}
					<NavLink
						to="/cart"
						className="btn btn-md btn-circle btn-ghost ml-4s"
					>
						<div className="indicator">
							<BsCart3 className="h-6 w-6" />
							<span className="badge badge-sm badge-primary indicator-item">{totalItems}</span>
						</div>
					</NavLink>
				</div>
			</section>
		</nav>
	);
}

export default Navbar;
