import axios from "axios";

const API_URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: API_URL
});

export const getFeaturedProducts = async () => {
	return await axios.get(`${API_URL}/products?featured=true`);
};

export const getSingleProduct = async id => {
	return await axios.get(`${API_URL}/products/${id}`);
};

export const getProducts = async params => {
	// console.log(params);
	return await axios.get(`${API_URL}/products`, { params });
};

export const registerUser = async data => {
	return await axios.post(`${API_URL}/auth/local/register`, data);
};

export const login = async data => {
	return await axios.post(`${API_URL}/auth/local`, data);
};

export const postOrder = async (info, token) => {
	return await axios.post(
		`${API_URL}/orders`,
		{ data: info },
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	);
};

export const getOrders = async (params, token) => {
	return await axios.get(`${API_URL}/orders`, {
		params,
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
};
