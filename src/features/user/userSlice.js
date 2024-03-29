import { createSlice } from "@reduxjs/toolkit";

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
			state.user = action.payload;
		},
		logoutUser: (state, action) => {
			console.log("logout");
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
