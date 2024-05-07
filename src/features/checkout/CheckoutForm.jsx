import { Form, redirect } from "react-router-dom";
import FormInput from "../../ui/FormInput";
import SubmitButton from "../../ui/SubmitButton";
import { formatCurrency } from "../../utils/helpers";
import { postOrder } from "../../services/apiProducts";
import { clearCart } from "../cart/cartSlice";
import { toast } from "react-toastify";

export const action =
	(store, queryClient) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);

		const user = store.getState().userState.user;

		const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;

		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatCurrency(orderTotal),
			cartItems,
			numItemsInCart
		};
		try {
			await postOrder(info, user.token);
			queryClient.removeQueries(["orders"]);
			store.dispatch(clearCart());
			toast.success("Order placed successfully");
			return redirect("/orders");
		} catch (error) {
			const errorMessage = error?.response?.data?.error?.message || "There was an error placing your order";
			toast.error(errorMessage);
			// eslint-disable-next-line no-constant-condition
			if (error?.response?.status === 401 || 403) {
				return redirect("/login");
			}
			return null;
		}
	};

function CheckoutForm() {
	return (
		<div>
			<Form method="POST">
				<h1>Shipping information</h1>
				<FormInput
					label="first name"
					type="text"
					name="name"
				/>
				<FormInput
					label="address"
					type="text"
					name="address"
				/>
				<div className="mt-6 capitalize">
					<SubmitButton text="place your order" />
				</div>
			</Form>
		</div>
	);
}

export default CheckoutForm;
