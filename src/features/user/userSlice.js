import { createSlice } from "@reduxjs/toolkit";

const getThemFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || "winter";
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	userName: "",
	theme: getThemFromLocalStorage()
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			console.log("login");
		},
		logout: (state, action) => {
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
export const { login, logout, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
