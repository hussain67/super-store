function FormInput({ label, type, name, defaultValue, placeHolder, size }) {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text capitalize">{label}</span>
			</label>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				placeholder={placeHolder}
				className={`input input-bordered ${size}`}
			/>
		</div>
	);
}

export default FormInput;
