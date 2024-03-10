import { useNavigation } from "react-router-dom";

function SubmitButton({ text }) {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	// from Daisy loading loading-spinner
	return (
		<button
			className="btn btn-primary btn-block"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<span className="loading loading-spinner"></span>
					Sending...
				</>
			) : (
				text || "Submit"
			)}
		</button>
	);
}

export default SubmitButton;
