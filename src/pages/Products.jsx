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
const allProductsQuery = queryParams => {
	const { search, company, category, sort, price, shipping, page } = queryParams;
	return {
		queryKey: ["products", search ?? "", category ?? "all", company ?? "all", sort ?? "a-z", price ?? 100000, shipping ?? false, page ?? 1],
		queryFn: () => getProducts(queryParams)
	};
};

export const loader =
	queryClient =>
	async ({ request }) => {
		const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		console.log(params);
		// console.log(request);
		const response = await queryClient.ensureQueryData(allProductsQuery(params));
		getProducts(params);

		console.log(response);
		const products = response.data.data;
		const meta = response.data.meta;
		return { products, meta };
	};

// export default Products;
