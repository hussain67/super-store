import { useSelector } from "react-redux";
import CartItemsList from "../features/cart/CartItemsList";
import SectionTitle from "../ui/SectionTitle";
import CartTotals from "../features/cart/CartTotals";
import { Link } from "react-router-dom";
function Cart() {
	const user = useSelector(state => state.userState.user);
	const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);

	// Cart Empty
	if (numItemsInCart === 0) return <SectionTitle text="You have no items in the cart" />;

	return (
		<section>
			<SectionTitle text="Cart items" />
			<article className="mt-8 grid gap-8 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<CartItemsList />
				</div>
				<div className="lg:col-span-4 lg:pl-4">
					<CartTotals />
					{user && (
						<Link
							to="/checkout"
							className="btn btn-primary btn-block my-6"
						>
							Proceed To Checkout
						</Link>
					)}
					{!user && (
						<Link
							to="/login"
							className="btn btn-primary btn-block my-4"
						>
							Please Login
						</Link>
					)}
				</div>
			</article>
		</section>
	);
}

export default Cart;
