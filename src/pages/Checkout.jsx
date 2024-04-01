import { useSelector } from "react-redux";
import CartTotals from "../features/cart/CartTotals";
import CheckoutForm from "../features/checkout/CheckoutForm";
import SectionTitle from "../ui/SectionTitle";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

function Checkout() {
	const cartTotal = useSelector(state => {
		return state.cartState.cartTotal;
	});
	if (cartTotal === 0) {
		return <SectionTitle text="Your cart is empty" />;
	}

	return (
		<>
			<SectionTitle text="Place Your Order" />
			<div className="grid gap-8 md:grid-cols-2 mt-6 items-start">
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
}
export const loader = store => () => {
	const user = store.getState().userState.user;
	if (!user) {
		toast.warn("You must be logged in to checkout");
		return redirect("/login");
	}
	return null;
};
export default Checkout;
