import { useLoaderData } from "react-router-dom";
import { getSingleProduct } from "../services/apiProducts";
import { formatCurrency, generateAmountOptions } from "../utils/helpers.jsx";
import { useState } from "react";

function SingleProduct() {
	const { product } = useLoaderData();
	const { image, title, company, description, price, colors } = product.attributes;
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);
	console.log(amount);
	return (
		<article className="grid grid-cols-2 gap-6">
			<section>
				<img
					src={image}
					alt="title"
					className="h-64 w-full object-cover"
				/>
			</section>
			<section>
				<h2 className="capitalize text-xl">{title}</h2>
				<h3 className="mt-2">{company}</h3>
				<h3 className="mt-2 text-secondary">{formatCurrency(price)}</h3>
				<p className="mt-2 text-sm">{description}</p>
				<div className="mt-2">
					<h2>Colors</h2>
					<div className="flex items-center">
						{colors.map(color => {
							return (
								<button
									key={color}
									onClick={() => setProductColor(color)}
									style={{ background: color }}
									className={` w-5 h-5 rounded-full mr-3 mt-2
									 ${color === productColor && "border-2 border-secondary"}`}
								></button>
							);
						})}
					</div>
				</div>
				<div className="mt-2">
					<h2>Amount</h2>
					<div>
						<select
							name=""
							id=""
							className="w-24 mt-1"
							onChange={e => setAmount(Number(e.target.value))}
						>
							{generateAmountOptions(20)}
						</select>
					</div>
				</div>
			</section>
		</article>
	);
}

export default SingleProduct;

export const loader = async ({ params }) => {
	const resp = await getSingleProduct(params.id);
	const product = resp.data.data;
	return { product };
};
