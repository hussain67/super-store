export function formatCurrency(value) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "EUR"
	}).format((value / 100).toFixed(2));
}

export const generateAmountOptions = number => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1;
		return (
			<option
				key={amount}
				value={amount}
			>
				{amount}
			</option>
		);
	});
};
