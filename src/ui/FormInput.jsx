function FormInput({ label, type, name, defaultValue }) {
	return (
		<div className="form-control">
			<label className="capitalize mb-1">{label}</label>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				className="input input-bordered"
			/>
		</div>
	);
}

export default FormInput;
