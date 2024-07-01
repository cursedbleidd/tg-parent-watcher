import axios from 'axios';
import { Target } from '../ITarget';

const targetShutdown = async (target: Target) => { //return response.status
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://tgwatcher-be.qpilipp.ru/Devices/shutdown/', {
            params: { Token: token, Id: target.id },
        });
        return response.status;
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }
    return undefined;
}; // API request

export const useGetTargets = () => targetShutdown;
