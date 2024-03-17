import { useState } from "react";
import { formatCurrency } from "../utils/helpers";

function FormRange({ label, name }) {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState(70000);
	return (
		<div className="form-control ">
			<label
				htmlFor={name}
				className="label cursor-pointer"
			>
				<span className="label-text capitalize">{label}</span>
				<span>{formatCurrency(selectedPrice)}</span>
			</label>
			<input
				name={name}
				type="range"
				className="range range-sm range-primary"
				value={selectedPrice}
				onChange={e => setSelectedPrice(e.target.value)}
				min={0}
				max={maxPrice}
				step={step}
			/>
			<div className="w-full flex justify-between mt-2 text-sm">
				<span>min: 0</span>
				<span>max: {formatCurrency(maxPrice)}</span>
			</div>
		</div>
	);
}

export default FormRange;
