import { Link, useLoaderData } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function ProductsList() {
	const { products } = useLoaderData();

	return (
		<section className=" ">
			{products.map(product => {
				const { title, price, image, company } = product.attributes;
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="p-8 mb-4 items-center sm:items-start flex gap-3 flex-col  sm:flex-row bg-base-100 sm:gap-8 shadow-xl hover:shadow-2xl group"
					>
						<figure className="">
							<img
								src={image}
								alt={title}
								className=" rounded-xl h-36 object-cover w-32 group-hover:scale-105 tranition duration-300"
							/>
						</figure>
						<div className="text-center">
							<h2 className="capitalize ">{title}</h2>
							<h2 className="text-sm ">{company}</h2>
						</div>
						<h2 className="sm:ml-auto">{formatCurrency(price)}</h2>
					</Link>
				);
			})}
		</section>
	);
}

export default ProductsList;
