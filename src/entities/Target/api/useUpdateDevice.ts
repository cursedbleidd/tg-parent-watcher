import axios from 'axios';
import { Target } from '../ITarget';

export const updateTarget = async (target: Target) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put('https://localhost:7036/Devices/', await JSON.stringify(target), {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { Token: token },
        }
        );

        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }
    return [];
}; // API request

export const useUpdateTarget = () => updateTarget;
