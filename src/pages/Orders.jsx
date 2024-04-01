import { toast } from "react-toastify";
import OrderLists from "../features/order/OrderLists";
import { redirect, useLoaderData } from "react-router-dom";
import { getOrders } from "../services/apiProducts";
import SectionTitle from "../ui/SectionTitle";
import PaginationContainer from "../ui/PaginationContainer";

export const loader =
	store =>
	async ({ request }) => {
		const user = store.getState().userState.user;
		if (!user) {
			toast.warn("You must be logged in to view the orders");
			return redirect("./login");
		}
		const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		try {
			const response = await getOrders(params, user.jwt);

			return { orders: response.data.data, meta: response.data.meta };
		} catch (error) {
			const errorMessage = error?.response?.data?.error?.message || "There was an error fetching your orders";
			toast.error(errorMessage);
			// eslint-disable-next-line no-constant-condition
			if (error.response.status === 401 || 403) {
				return redirect("/login");
			}
		}
	};
function Orders() {
	const { meta } = useLoaderData();

	if (meta.pagination.total < 1) {
		return <SectionTitle text="Please make an order" />;
	}
	return (
		<>
			<SectionTitle text="Your orders" />
			<OrderLists />
			<PaginationContainer />
		</>
	);
}

export default Orders;
