import { useDispatch } from "react-redux";
import { formatCurrency, generateAmountOptions } from "../../utils/helpers";
import { editItem, removeItem } from "./cartSlice";

function CartItem({ item }) {
	const dispatch = useDispatch();
	const { cartId, productId, title, image, company, price, amount, productColor } = item;

	//Edit Item
	const handleChange = e => {
		const amount = e.target.value;
		console.log(amount);
		dispatch(editItem({ cartId, amount }));
	};

	// Remove item
	const handleRemove = cartId => dispatch(removeItem({ cartId }));

	return (
		<article className="flex flex-col items-center sm:flex-row gap-3 sm:gap-8 mb-8 sm:justify-between">
			<img
				className="h-24 w-32 sm:h-32 block pb-4 rounded-sm object-cover"
				src={image}
				alt={title}
			/>
			<div className=" sm:ml-16 sm:w-48 capitalize">
				<h3>{title}</h3>
				<h4 className="text-sm mt-2">{company}</h4>
				<p className="flex items-center gap-x-2 text-sm mt-2">
					Color:
					<span
						className="badge badge-sm"
						style={{ backgroundColor: productColor }}
					></span>
				</p>
			</div>
			<div className="sm:ml-12">
				<h3> Amount</h3>
				<div>
					<select
						name=""
						id=""
						value={amount}
						className="w-full mt-2"
						onChange={handleChange}
					>
						{generateAmountOptions(amount + 5)}
					</select>
				</div>
				<button
					className="link link-primary link-hover text-sm mt-2 "
					onClick={() => handleRemove(cartId)}
				>
					Remove
				</button>
			</div>
			<div className="sm:ml-auto">{formatCurrency(price)}</div>
		</article>
	);
}

export default CartItem;
