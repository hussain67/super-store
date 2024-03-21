import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartTotals() {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(state => state.cartState);
	return (
		<section className="card bg-base-200">
			<article className="card-body">
				<div className="flex justify-between border-b pb-2 border-base-300">
					<span>Cart Total:</span>
					<span>{formatCurrency(cartTotal)}</span>
				</div>
				<div className="flex justify-between border-b pb-2 border-base-300">
					<span>Shipping:</span>
					<span>{formatCurrency(shipping)}</span>
				</div>
				<div className="flex justify-between border-b pb-2 border-base-300">
					<span>Tax:</span>
					<span className="">{formatCurrency(tax)}</span>
				</div>
				<div className="flex justify-between ">
					<span>Order Total:</span>
					<span>{formatCurrency(orderTotal)}</span>
				</div>
			</article>
		</section>
	);
}

export default CartTotals;
