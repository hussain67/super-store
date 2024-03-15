import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
	const [layout, setLayout] = useState("grid");
	const { meta } = useLoaderData();
	console.log(meta.pagination);
	const totalProducts = meta.pagination.total;

	const setActiveStyles = pattern => {
		return `text-xl btn btn-circle btn-sm ${layout === pattern ? "btn-primary text-primary-content" : "btn-ghost text-base-content"}`;
	};
	return (
		<>
			<section className="flex justify-between border-b pb-6 border-base-300">
				<h4>
					{totalProducts} Product{totalProducts > 1 ? "s" : ""}
				</h4>
				<div className="flex gap-3 items-center ">
					<button
						className={setActiveStyles("grid")}
						onClick={() => setLayout("grid")}
					>
						<BsFillGridFill />
					</button>
					<button
						className={setActiveStyles("list")}
						onClick={() => setLayout("list")}
					>
						<BsList />
					</button>
				</div>
			</section>
			{totalProducts === 0 && <h5>Sorry the product you requested is not in the store</h5>}
			{totalProducts !== 0 && <div>{layout === "grid" ? <ProductsGrid /> : <ProductsList />}</div>}
		</>
	);
}

export default ProductsContainer;
