import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
import AppLayout from "./ui/AppLayout";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import { action as checkoutAction } from "./features/checkout/CheckoutForm";
import { action as registrationAction } from "./features/authentication/RegisterForm";
import { action as loginAction } from "./features/authentication/LoginForm";
import { store } from "./store";
// import { login } from "./features/user/userSlice";

// Create Router
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader
			},
			{
				path: "/products",
				element: <Products />,
				loader: productsLoader
			},
			{
				path: "/products/:id",
				element: <SingleProduct />,
				loader: singleProductLoader
			},
			{
				path: "/cart",
				element: <Cart />
			},
			{
				path: "/orders",
				element: <Orders />,
				loader: ordersLoader(store)
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/checkout",
				element: <Checkout />,
				loader: checkoutLoader(store),
				action: checkoutAction(store)
			}
		]
	},
	{
		path: "/login",
		element: <Login />,
		action: loginAction(store)
	},
	{
		path: "/register",
		element: <Register />,
		action: registrationAction
	}
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
