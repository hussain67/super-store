import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />
			},
			{
				path: "/products",
				elment: <Products />
			},
			{
				path: "/products/:id",
				element: <SingleProduct />
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
		element: <Register />
	}
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
