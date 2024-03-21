import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0
};

// fetch stored cart data

function getCartFromLocalStorage() {
	return JSON.parse(localStorage.getItem("cart")) || defaultState;
}

// const cartProduct = {
// 	cartId: product.id + productColor,
// 	productId: product.id,
// 	title,
// 	image,
// 	company,
// 	price,
// 	amount,
// 	productColor
// };
const cartSlice = createSlice({
	name: "cart",
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find(item => item.cartId === product.cartId);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.amount;
			state.cartTotal += product.amount * product.price;

			// calling calculateTotal reducer
			cartSlice.caseReducers.calculateTotal(state);
			toast.success("Item added to the cart");
		},
		clearCart: state => {
			state.cartItems = defaultState;
		},
		removeItem: (state, action) => {
			
		},
		editItem: (state, action) => {},
		calculateTotal: state => {
			state.tax += 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.tax + state.shipping;
			localStorage.setItem("cart", JSON.stringify(state));
		}
	}
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
