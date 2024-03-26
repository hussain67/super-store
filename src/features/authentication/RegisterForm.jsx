import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../../ui/FormInput";
import SubmitButton from "../../ui/SubmitButton";
import { registerUser } from "../../services/apiProducts";
import { toast } from "react-toastify";

function RegisterForm() {
	return (
		<Form
			method="POST"
			className="card w-96 gap-5 shadow-md p-6"
		>
			<h4 className="text-bold text-center ">Register</h4>
			<FormInput
				type="text"
				name="username"
				placeHolder="your name"
				label="Name"
			/>
			<FormInput
				type="email"
				name="email"
				placeHolder="test@test"
				label="Email"
			/>
			<FormInput
				type="password"
				name="password"
				placeHolder="......"
				label="Password"
			/>
			<div>
				<SubmitButton text="Register" />
			</div>
			<p className="text-center">
				Already a member ? <Link to="/login">Login</Link>
			</p>
		</Form>
	);
}

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await registerUser(data);
		toast.success("User created successfully");
		return redirect("/login");
	} catch (error) {
		const errorMessage = error?.response?.data?.error?.message || "Please check your credential";
		toast.error(errorMessage);
		return null;
	}
};
export default RegisterForm;
