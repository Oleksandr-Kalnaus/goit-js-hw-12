import axios from 'axios';

const API_KEY = '45454606-0b86bc84167fe88447f90b3f4';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
    try {
        const response = await axios.get('https://pixabay.com/api/?', {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page,
                per_page: 15,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};