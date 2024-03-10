import { Form, Link } from "react-router-dom";
import FormInput from "../../ui/FormInput";
import SubmitButton from "../../ui/SubmitButton";

function RegisterForm() {
	return (
		<Form
			method="POST"
			className="card w-96 gap-5 shadow-md p-6"
		>
			<h4 className="text-bold text-center ">Register</h4>
			<FormInput
				type="text"
				name="name"
				defaultValue="name"
				label="Name"
			/>
			<FormInput
				type="email"
				name="email"
				defaultValue="test@test"
				label="Email"
			/>
			<FormInput
				type="password"
				name="password"
				defaultValue="...."
				label="Password"
			/>
			<div>
				<SubmitButton text="Submit" />
			</div>
			<p className="text-center">
				Already a member ? <Link to="/login">Login</Link>
			</p>
		</Form>
	);
}

export default RegisterForm;
