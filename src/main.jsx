import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
		<ToastContainer position="top-center" />
	</Provider>
);
