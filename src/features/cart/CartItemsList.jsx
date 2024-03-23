import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItemsList() {
	const { cartItems } = useSelector(state => state.cartState);
	console.log(cartItems);

	return (
		<div>
			{cartItems.map(item => {
				return (
					<CartItem
						key={item.cartId}
						item={item}
					/>
				);
			})}
		</div>
	);
}

export default CartItemsList;
