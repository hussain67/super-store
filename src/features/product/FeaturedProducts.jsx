import SectionTitle from "../../ui/SectionTitle";
import ProductsGrid from "./ProductsGrid";

function FeaturedProducts() {
	return (
		<div>
			<SectionTitle text={"Featured products"} />
			<ProductsGrid />
		</div>
	);
}

export default FeaturedProducts;
