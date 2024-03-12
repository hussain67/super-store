import { Link, useLoaderData } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function ProductsGrid() {
	const { products } = useLoaderData();

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3  ">
			{products.map(product => {
				const { title, price, image } = product.attributes;
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="card shadow-lg hover:shadow-xl"
					>
						<figure className="py-4">
							<img
								src={image}
								alt={title}
								className="rounded-xl h-64 object-cover w-full"
							/>
						</figure>
						<div className="text-center">
							<h2 className="capitalize">{title}</h2>
							<span className="text-secondary">{formatCurrency(price)}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default ProductsGrid;
