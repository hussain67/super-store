import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getThemFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || "winter";
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
	user: getUserFromLocalStorage(),
	theme: getThemFromLocalStorage()
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state, action) => {
			state.user = null;
			localStorage.removeItem("user");

			toast.success("Logged out successfully");
		},
		toggleTheme: (state, action) => {
			state.theme = state.theme === "winter" ? "dracula" : "winter";
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);

			console.log("toggleTheme");
		}
	}
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
