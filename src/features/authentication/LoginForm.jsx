import { Form, Link, redirect } from "react-router-dom";

import FormInput from "../../ui/FormInput";
import SubmitButton from "../../ui/SubmitButton";
import { login } from "../../services/apiProducts";
import { toast } from "react-toastify";
import { loginUser } from "../user/userSlice";

function LoginForm() {
	return (
		<Form
			method="post"
			className="w-96  "
		>
			<h4 className="font-semibold text-center text-2xl tracking-[2px]">Login</h4>
			<FormInput
				type="email"
				label="email"
				name="identifier"
			/>

			<FormInput
				type="password"
				label="password"
				name="password"
				placeHolder="......."
			/>
			<div className="text-center my-6">
				<SubmitButton text="login" />
			</div>

			<p className="text-center">
				Not a member yet? <Link to="/register">Register</Link>
			</p>
		</Form>
	);
}

export const action =
	store =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response = await login(data);
			store.dispatch(loginUser(response.data));

			toast.success("Logged in successfully");
			return redirect("/");
		} catch (error) {
			const errorMessage = error?.response?.data?.error?.message || "Please check your credential";
			toast.error(errorMessage);
			return null;
		}
	};

export default LoginForm;
