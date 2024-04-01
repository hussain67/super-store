import Filters from "../features/product/Filters";
import ProductsContainer from "../features/product/ProductsContainer";
// import { customFetch } from "../services/apiProducts";
import { getProducts } from "../services/apiProducts";
import PaginationContainer from "../ui/PaginationContainer";
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
	const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
	console.log(request);
	const response = await getProducts(params);
	// const response = await customFetch(url, { params });

	console.log(response);
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta };
};

// export default Products;
