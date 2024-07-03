import axios from 'axios';

export const deleteTarget = async (targetId: string) => { //return response.status
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`https://tgwatcher-be.qpilipp.ru/Devices/${targetId}`, {
            params: { token },
        });

        return response.status;
    } catch (error) {
        return undefined;
    }
};

export const useDeleteTarget = () => deleteTarget;
