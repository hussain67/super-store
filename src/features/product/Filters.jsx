import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect";
import FormRange from "../../ui/FormRange";
import FormCheckbox from "../../ui/FormCheckbox";

function Filters() {
	const { meta } = useLoaderData();
	return (
		<Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
			<FormInput
				type="search"
				name="search"
				size="input-sm"
				label="search product"
			/>

			{/* CATEGORIES */}
			<FormSelect
				label="select category"
				size="select-sm"
				list={meta.categories}
				name="category"
			/>

			{/* COMPANY */}
			<FormSelect
				label="select company"
				size="select-sm"
				list={meta.companies}
				name="company"
			/>

			{/* ORDER */}
			<FormSelect
				label="sort by"
				size="select-sm"
				list={["a-z", "z-a", "high", "low"]}
				name="order"
			/>
			<FormRange
				label="select price"
				name="price"
			/>
			<FormCheckbox
				label="free shipping"
				name="shipping"
				size="checkbox-sm"
			/>
			<button className="btn btn-sm btn-primary">Search</button>
			<Link
				to="/products"
				className="btn  btn-sm btn-accent"
			>
				Reset
			</Link>
		</Form>
	);
}

export default Filters;
