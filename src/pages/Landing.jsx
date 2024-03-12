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

export const loader = async () => {
	const response = await getFeaturedProducts();
	const products = response.data.data;
	return { products };
};
