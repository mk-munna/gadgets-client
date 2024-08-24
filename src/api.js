import axios from 'axios';

const API_URL = 'https://gadgets-co.vercel.app/gadgets';
// const API_URL = 'http://localhost:5000/gadgets';

export const getProducts = async (page, limit, search = '', filters = {}, sort = '') => {
    console.log(page, limit, search, filters, sort);
    try {
        const response = await axios.get(API_URL, {
            params: { page, limit, search, ...filters, sort },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
