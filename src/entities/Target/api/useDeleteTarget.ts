import axios from 'axios';

export const deleteTarget = async (targetId: string) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`https://localhost:7036/Devices/${targetId}`, {
            params: { token },
        });

        return response.status;
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }
    return undefined;
}; // API request

export const useDeleteTarget = () => deleteTarget;
