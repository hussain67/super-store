import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
import AppLayout from "./ui/AppLayout";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { action as registrationAction } from "./features/authentication/RegisterForm";

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
				element: <Orders />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/checkout",
				Element: <Checkout />
			}
		]
	},
	{
		path: "/login",
		element: <Login />
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
