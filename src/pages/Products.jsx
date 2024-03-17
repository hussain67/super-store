import Filters from "../features/product/Filters";
import PaginationContainer from "../features/product/PaginationContainer";
import ProductsContainer from "../features/product/ProductsContainer";
import { getProducts } from "../services/apiProducts";

export default function Products() {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
}

export const loader = async ({ request }) => {
	console.log(request);
	const response = await getProducts();
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta };
};

// export default Products;
