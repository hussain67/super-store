function FormInput({ label, type, name, defaultValue, size }) {
	return (
		<div className="form-control">
			<label className="capitalize mb-1">{label}</label>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				className={`input input-bordered ${size}`}
			/>
		</div>
	);
}

export default FormInput;
