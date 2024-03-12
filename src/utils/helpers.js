export function formatCurrency(value) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "EUR"
	}).format((value / 100).toFixed(2));
}
