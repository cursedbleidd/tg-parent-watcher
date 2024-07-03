import axios from 'axios';

const targetShutdown = async (targetId: string) => { //return response.status
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://tgwatcher-be.qpilipp.ru/Devices/shutdown/', {
            params: { Token: token, Id: targetId },
        });
        return response.status;
    } catch (error) {
        return undefined;
    }
};

export const useShutdownTargets = () => targetShutdown;
