// import { QueryClient } from "@tanstack/react-query";
import FeaturedProducts from "../features/product/FeaturedProducts";
import Hero from "../features/product/Hero";
import { getFeaturedProducts } from "../services/apiProducts";

function Landing() {
	return (
		<div>
			<Hero />
			<FeaturedProducts />
		</div>
	);
}

export default Landing;

const featuredProductsQuery = {
	queryKey: ["featuredProducts"],
	queryFn: () => getFeaturedProducts()
};

export const loader = queryClient => async () => {
	const response = await queryClient.ensureQueryData(featuredProductsQuery);
	console.log(response);
	const products = response.data.data;
	return { products };
};
