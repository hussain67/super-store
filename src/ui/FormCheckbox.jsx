function FormCheckbox({ label, name, defaultValue, size }) {
	return (
		<div className="form-control items-center">
			<label
				htmlFor={name}
				className="label"
			>
				<span className="label-text capitalize">{label}</span>
			</label>
			<input
				type="checkbox"
				className={`checkbox checkbox-primary ${size}`}
				defaultChecked={defaultValue}
			/>
		</div>
	);
}

export default FormCheckbox;
