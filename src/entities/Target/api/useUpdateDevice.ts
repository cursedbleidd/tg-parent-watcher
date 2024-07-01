import axios from 'axios';
import { Target } from '../ITarget';

export const updateTarget = async (target: Target) => { //return response.status
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put('https://tgwatcher-be.qpilipp.ru/Devices/', await JSON.stringify(target), {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { Token: token },
        }
        );

        return response.status;
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }
    return undefined;
}; // API request

export const useUpdateTarget = () => updateTarget;
