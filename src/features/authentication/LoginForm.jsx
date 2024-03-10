import { Form, Link } from "react-router-dom";

import FormInput from "../../ui/FormInput";
import SubmitButton from "../../ui/SubmitButton";

function LoginForm() {
	return (
		<Form
			method="POST"
			className="w-96  "
		>
			<h4 className="font-semibold text-center text-2xl tracking-[2px]">Login</h4>
			<FormInput
				type="email"
				label="email"
				name="identifyer"
				defaultValue="test@test"
			/>

			<FormInput
				type="password"
				label="password"
				name="password"
				defaultValue="......."
			/>
			<div className="text-center my-6">
				<SubmitButton text="login" />
			</div>
			<button
				type="button"
				className="btn btn-secondary btn-block mb-6"
			>
				Guest user
			</button>
			<p className="text-center">
				Not a member yet? <Link to="/register">Register</Link>
			</p>
		</Form>
	);
}

export default LoginForm;
