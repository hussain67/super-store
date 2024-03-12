import axios from "axios";

const API_URL = "https://strapi-store-server.onrender.com";

export const customFetch = axios.create({
	baseURL: API_URL
});

export const getFeaturedProducts = async () => {
	return await axios.get(`${API_URL}/api/products?featured=true`);
};

export const getSingleProduct = async id => {
	return await axios.get(`${API_URL}/api/products/${id}`);
};
